window.onload = function() {
    var height = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("atkValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";
};

window.onresize = function() {
    var height = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("atkValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";
};

document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};

document.getElementById("helpLink").onclick = function() {
    document.getElementById("modal").style.display = "block";

    return false;
};

document.getElementById("clearGrid1").onclick = function() {
    clearGrid(0);
    clearCalcResults();
    rsSelect(0);
    document.getElementById("shinmaSelectDiv").style.display = "none";
    document.getElementById("rsSelectDiv").style.display = "none";
    document.getElementById("resultsDiv").innerHTML = "";

    return false;
};

document.getElementById("clearGrid2").onclick = function() {
    clearGrid(1);
    document.getElementById("resultsDiv").innerHTML = "";

    return false;
};

document.getElementById("submitBtn").onclick = function() {
    if (checkInputs(2)) {
        compareGrids();
    } else {
        window.alert("Please check your inputs.");
    }

    return false;
};

document.getElementById("calcBtn").onclick = function() {
    if (checkInputs(1)) {
        calculateGrid();
    } else {
        window.alert("Please check your inputs.");
    }

    return false;
}

document.getElementById("copyBtn").onclick = function() {
    var copyFrom = document.getElementById("copySelect1").value;
    var copyTo = document.getElementById("copySelect2").value;
    var weaponGrid = createGrid(copyFrom);

    copyGrid(weaponGrid, copyTo);

    return false;
};

document.getElementById("exportBtn").onclick = function() {
    var gridNum = document.getElementById("exportSelect").value;

    exportGrid(gridNum);

    return false;
};

document.getElementById("importBtn").onclick = function() {
    document.getElementById('selectFiles').value = '';
	document.getElementById('selectFiles').click();

    return false;
};

document.getElementById("closeBtn").onclick = function() {
    document.getElementById("weaponGrid2").style.display = "none";
    document.getElementById("weaponGrid1Results").style.display = "inline-block";
    document.getElementById("exportSelect").style.display = "none";
    document.getElementById("copyDiv").style.display = "none";
    document.getElementById("exportSelect").value = 0;
    document.getElementsByClassName("tableHeadingText")[0].innerHTML = 'Weapon Grid: ';
    document.getElementById("resultsDiv").innerHTML = "";

    clearGrid(1);

    var height = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("atkValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";

    return false;
};

document.getElementById("openCompareBtn").onclick = function() {
    document.getElementById("weaponGrid2").style.display = "inline-block";
    document.getElementById("weaponGrid1Results").style.display = "none";
    document.getElementById("exportSelect").style.display = "inline-block";
    document.getElementById("copyDiv").style.display = "block";
    document.getElementById("rsSelect").value = 0;
    document.getElementById("shinmaSelect").value = 0;
    document.getElementById("shinmaSelectDiv").style.display = "none";
    document.getElementById("rsSelectDiv").style.display = "none";
    document.getElementsByClassName("tableHeadingText")[0].innerHTML = 'Weapon Grid 1: ';
    document.getElementById("resultsDiv").innerHTML = "";

    rsSelect(0);
    clearCalcResults();

    return false;
};

document.getElementById("selectFiles").onchange = function() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }
    
    var fr = new FileReader();
    
    fr.onload = function(e) { 
        console.log(e);
        var result = JSON.parse(e.target.result);
        var gridNum = document.getElementById("exportSelect").value;
        importJsonFile(result,gridNum);

        var rsSelectValue = document.getElementById("rsSelect").value;
        rsSelect(rsSelectValue);
    }
    
    fr.readAsText(files.item(0));

    return false;
};

document.getElementById("shinmaSelect").onchange = function() {
    calculateUpdate();

    return false;
}

document.getElementById("rsSelect").onchange = function() {
    var rsSelectValue = document.getElementById("rsSelect").value;

    rsSelect(rsSelectValue);
    calculateUpdate();

    return false;
};

for (let i = 0; i < 40; i++) {
    document.getElementsByClassName("weaponType")[i].onchange = function() {
        weaponTypeSelect(document.getElementsByClassName("weaponType")[i].value, i);

        return false;
    };

    document.getElementsByClassName("weaponModifier")[i].onchange = function() {
        weaponModifierSelect(document.getElementsByClassName("weaponModifier")[i].value, i);

        return false;
    }

    if (i < 20) {
        document.getElementsByClassName("rsCheck")[i].onchange = function() {
            calculateUpdate();

            return false;
        }
    }
}

function checkInputs(numGrids) {
    var pdef = document.getElementsByClassName("pdefInput");
    var mdef = document.getElementsByClassName("mdefInput");
    var weaponType = document.getElementsByClassName("weaponType");
    var weaponSkillLevel = document.getElementsByClassName("weaponSkillLevel");
    var weaponSupSkill = document.getElementsByClassName("weaponSupSkill");
    var supportSkillLevel = document.getElementsByClassName("supportSkillLevel");

    for (var i = 0; i < numGrids; i++) {
        if (!Number.isInteger(+pdef[i].value) || !Number.isInteger(+mdef[i].value) || pdef[i].value < 1 || mdef[i].value < 1) {
            return false;
        }

        for (var j = 0; j < 20; j++) {
            if (weaponType[(i * 20) + j].value > 0) {
                if (!Number.isInteger(+weaponSkillLevel[(i * 20) + j].value) || weaponSkillLevel[(i * 20) + j].value < 1 || weaponSkillLevel[(i * 20) + j].value > 20) {
                    return false;
                }
            }

            if (weaponSupSkill[(i * 20) + j].value > 0) {
                if (!Number.isInteger(+supportSkillLevel[(i * 20) + j].value) || supportSkillLevel[(i * 20) + j].value < 1 || supportSkillLevel[(i * 20) + j].value > 20) {
                    return false;
                }
            }
        }
    }

    return true;
}

function compareGrids() {
    var weaponGrids = [];
    var mods;

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    mods = calculateMods(weaponGrids, 2);
    processCompare(mods);
}

function calculateGrid() {
    var weaponGrids = [];
    var mods;

    document.getElementById("rsSelect").value = 0;
    document.getElementById("shinmaSelect").value = 0;

    rsSelect(0);

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    processCalculate(mods);

    document.getElementById("shinmaSelectDiv").style.display = "inline-block";
    document.getElementById("rsSelectDiv").style.display = "inline-block";
}

function createGrid(gridNum) {
    var weaponGrid = {};

    weaponGrid["gridName"] = document.getElementsByClassName("gridName")[gridNum].value;
    weaponGrid["pdef"] = document.getElementsByClassName("pdefInput")[gridNum].value;
    weaponGrid["mdef"] = document.getElementsByClassName("mdefInput")[gridNum].value;

    for (var i = 0; i < 20; i++) {
        var weapon = {};

        weapon["weaponType"] = document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value;
        weapon["weaponSkillModifier"] = document.getElementsByClassName("weaponModifier")[(gridNum * 20) + i].value;
        weapon["weaponSkillLevel"] = document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value;
        weapon["weaponTargets"] = document.getElementsByClassName("weaponTargets")[(gridNum * 20) + i].value;
        weapon["weaponSupSkill"] = document.getElementsByClassName("weaponSupSkill")[(gridNum * 20) + i].value;
        weapon["supportSkillLevel"] = document.getElementsByClassName("supportSkillLevel")[(gridNum * 20) + i].value;
        weapon["weaponName"] = document.getElementsByClassName("weaponName")[(gridNum * 20) + i].value;

        weaponGrid[i] = weapon;
    }

    weaponGrid["job"] = document.getElementsByClassName("job")[gridNum].value;

    return weaponGrid;
}

function calculateMods(weaponGrids, numGrids) {
    var mods = [];

    for (var i = 0; i < numGrids; i++) {
        var weaponGrid = weaponGrids[i];
        var rsMod;
        var healMods = {};

        rsMod = calculateRS(weaponGrid, numGrids);

        for (var j = 0; j < 20; j++) {
            var weapon = weaponGrid[j];
            var weaponType = weapon["weaponType"];
            var skillMod = weapon["weaponSkillModifier"];
            var skillLevel = weapon["weaponSkillLevel"];
            var skillLevelMod;
            var jobMod;
            var totalMods;
            var weaponMod = {};

            weaponMod["weaponType"] = weaponType;

            if (weaponType > 0) {
                if (weaponType == 1) {
                    if (weaponGrid["job"] == 0) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 1) {
                        jobMod = 1.35;
                    } else {
                        jobMod = 1;
                    }
                } 

                skillLevelMod = 1 + ((skillLevel - 1) * 0.03);

                if (skillLevel > 14) {
                    skillLevelMod += 0.03;
                }

                if (skillLevel == 20) {
                    skillLevelMod += 0.05;
                }

                totalMods = skillMod * skillLevelMod * rsMod * jobMod;
                
                weaponMod["modValue"] = totalMods;
            } else {
                weaponMod["modValue"] = 0;
            }

            healMods[j] = weaponMod;
        }

        healMods["rsMod"] = rsMod;

        mods[i] = healMods;
    }

    return mods;
}

function calculateRS(weaponGrid, numGrids) {
    var rsMod = 1;
    var rsSelectValue = document.getElementById("rsSelect").value;
    var rsCheckBoxes = document.getElementsByClassName("rsCheck");

    if (numGrids == 1 && rsSelectValue == 1) {
        for (var i = 0; i < 20; i++) {
            if (rsCheckBoxes[i].checked == true) {
                var skillLevelMod;
                var instancersMod;

                skillLevelMod = 1 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.03);

                if (weaponGrid[i]["supportSkillLevel"] > 14) {
                    skillLevelMod += 0.03;
                }

                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    skillLevelMod += 0.05;
                }

                instancersMod = (((weaponGrid[i]["weaponSupSkill"] * 5) / 100) * skillLevelMod)

                rsMod += instancersMod;
            }
        }
    } else {
        for (var i = 0; i < 20; i++) {
            var skillLevelMod;
            var procRate;
            var instancersMod;

            if (weaponGrid[i]["weaponSupSkill"] > 0) {
                skillLevelMod = 1 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.03);

                if (weaponGrid[i]["supportSkillLevel"] > 14) {
                    skillLevelMod += 0.03;
                }

                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    skillLevelMod += 0.05;
                }

                procRate = 0.04 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.005);

                if (weaponGrid[i]["supportSkillLevel"] > 14) {
                    procRate += 0.005;
                }

                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    procRate += 0.005;
                }

                instancersMod = (((weaponGrid[i]["weaponSupSkill"] * 5) / 100) * skillLevelMod * procRate)
            } else {
                instancersMod = 0;
            }

            rsMod += instancersMod;
        }
    }

    return rsMod;
}

function processCompare(mods) {
    var results;

    createResultsRegion();
    results = compareResults(mods);
    compareRender(results);
}

function processCalculate(mods) {
    var results;

    createResultsRegion();
    results = calculateResults(mods);
    calculateRender(results);
}

function createResultsRegion() {
    var resultsDiv = document.getElementById("resultsDiv");
    var resultsTextDiv = document.createElement("div");
    var resultsHeal = document.createElement("p");
    var resultsText = document.createElement("p");
    
    resultsTextDiv.id = "resultsTextDiv";
    resultsHeal.id = "resultsHeal";
    resultsText.id = "resultsText";

    resultsDiv.innerHTML = "";

    resultsTextDiv.appendChild(resultsHeal);
    resultsTextDiv.appendChild(resultsText);
    resultsDiv.appendChild(resultsTextDiv);
}

function compareUpdate() {
    var weaponGrids = [];
    var mods;
    var results;

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    mods = calculateMods(weaponGrids, 2);
    results = compareResults(mods);
    compareRender(results);
}

function calculateUpdate() {
    var weaponGrids = [];
    var mods;
    var results;

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    results = calculateResults(mods);
    calculateRender(results);
}

function compareResults(mods) {
    var pdefValues = document.getElementsByClassName("pdefInput");
    var mdefValues = document.getElementsByClassName("mdefInput");
    var total = [];
    var strengthRatio;
    var results = [];

    for (var i = 0; i < 2; i++) {
        var weaponMods = mods[i];
        var healTotal = 0;
        var pdef = pdefValues[i].value;
        var mdef = mdefValues[i].value;

        for (var j = 0; j < 20; j++) {
            var weaponTargets = document.getElementsByClassName("weaponTargets")[(i * 20) + j].value;

            if (weaponMods[j]["weaponType"] == 1) {
                healTotal += (Number(pdef) + Number(mdef)) * weaponMods[j]["modValue"] * weaponTargets;
            } else {
                healTotal += 0;
            }
        }

        total[i] = healTotal * 0.05;
    }

    if (total[0] > total[1]) {
        strengthRatio = ((total[0] / total[1]) * 100);
        results[0] = "Grid 1 Heals: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Heals: " + Number((total[1]).toFixed(0)).toLocaleString();
        results[1] = "Grid 1 healing is " + Number((strengthRatio).toFixed(2)) + "% of Grid 2";
    } else if (total[1] > total[0]) {
        strengthRatio = ((total[1] / total[0]) * 100);
        results[0] = "Grid 1 Heals: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Heals: " + Number((total[1]).toFixed(0)).toLocaleString();
        results[1] = "Grid 2 healing is " + Number((strengthRatio).toFixed(2)) + "% of Grid 1";
    } else {
        results[0] = "Grid 1 Heals: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Heals: " + Number((total[1]).toFixed(0)).toLocaleString();
        results[1] = "The grids are equal in strength";
    }

    return results;
}

function calculateResults(mods) {
    var pdefValues = document.getElementsByClassName("pdefInput");
    var mdefValues = document.getElementsByClassName("mdefInput");
    var shinmaSelectValue = document.getElementById("shinmaSelect").value;
    var shinmaCalcResults;
    var totalResults = {};
    var weaponMods = mods[0];
    var healTotal = 0;
    var pdef = pdefValues[0].value;
    var mdef = mdefValues[0].value;

    for (var j = 0; j < 20; j++) {
        var weaponResults = {};
        var weaponTargets = document.getElementsByClassName("weaponTargets")[j].value;

        if (weaponMods[j]["weaponType"] == 1) {
            weaponResults["baseHeal"] = (Number(pdef) + Number(mdef)) * weaponMods[j]["modValue"] / weaponMods["rsMod"];
            weaponResults["rsHeal"] = weaponResults["baseHeal"] * weaponMods["rsMod"];
            weaponResults["aoeHeal"] = weaponResults["baseHeal"] * weaponTargets;
            weaponResults["totalHeal"] = weaponResults["rsHeal"] * weaponTargets;
            healTotal += weaponResults["totalHeal"];
        } else {
            weaponResults["baseHeal"] = 0;
            weaponResults["rsHeal"] = 0;
            weaponResults["aoeHeal"] = 0;
            weaponResults["totalHeal"] = 0;
            healTotal += 0;
        }

        totalResults[j] = weaponResults;
    }

    if (shinmaSelectValue > 0) {
        shinmaCalcResults = shinmaCalc(totalResults);
        totalResults = shinmaCalcResults[0];
        healTotal = shinmaCalcResults[1];
    }

    for (var i = 0; i < 20; i++) {
        if (healTotal != 0) {
            totalResults[i]["healPercent"] = totalResults[i]["totalHeal"] / healTotal;
        } else {
            totalResults[i]["healPercent"] = 0;
        }

        totalResults[i]["baseHeal"] *= (0.05);
        totalResults[i]["rsHeal"] *= (0.05);
        totalResults[i]["aoeHeal"] *= (0.05);
        totalResults[i]["totalHeal"] *= (0.05);
    }

    totalResults["totalGridHeal"] = healTotal * 0.05;

    return totalResults;
}

function shinmaCalc(totalResults) {
    var weaponSkillModifiers = document.getElementsByClassName("weaponModifier");
    var shinmaSelectValue = document.getElementById("shinmaSelect").value;
    var shinmaMod;
    var shinmaResults = [];
    var totalDamage = 0;
    var shinmaCalcResults = [];

    for (var i = 0; i < 20; i++) {
        var weaponResults = totalResults[i];

        if (shinmaSelectValue == 1) {
            if (weaponSkillModifiers[i].value == 3 || weaponSkillModifiers[i].value == 2.78 || weaponSkillModifiers[i].value == 2.34 || weaponSkillModifiers[i].value == 2.33 || weaponSkillModifiers[i].value == 2.25) {
                shinmaMod = 2.9;
            } else if (weaponSkillModifiers[i].value == 2.04 || weaponSkillModifiers[i].value == 1.8) {
                shinmaMod = 1.6;
            } else if (weaponSkillModifiers[i].value == 1.5 || weaponSkillModifiers[i].value == 1.35) {
                shinmaMod = 1.3;
            }

            weaponResults["baseHeal"] *= shinmaMod;
            weaponResults["rsHeal"] *= shinmaMod;
            weaponResults["aoeHeal"] *= shinmaMod;
            weaponResults["totalHeal"] *= shinmaMod;
        } 

        shinmaResults[i] = weaponResults;
        totalDamage += weaponResults["totalHeal"];
    }

    shinmaCalcResults[0] = shinmaResults;
    shinmaCalcResults[1] = totalDamage;

    return shinmaCalcResults;
}

function compareRender(results) {
    document.getElementById("resultsHeal").innerHTML = results[0]
    document.getElementById("resultsText").innerHTML = results[1];
}

function calculateRender(results) {
    var gridWeaponName = document.getElementsByClassName("weaponName");
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var heal = document.getElementsByClassName("resultHeal");
    var healRS = document.getElementsByClassName("resultHealRS");
    var healAoE = document.getElementsByClassName("resultHealAoE");
    var healTotal = document.getElementsByClassName("resultHealTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        if (results[i]["weaponType"] == 0) {
            weaponName[i].innerHTML = "None";
        } else if (gridWeaponName[i].value == "") {
            weaponName[i].innerHTML = "Weapon " + (i + 1);
        } else {
            weaponName[i].innerHTML = gridWeaponName[i].value;
        }

        heal[i].innerHTML = Number((results[i]["baseHeal"]).toFixed(0)).toLocaleString();
        healRS[i].innerHTML = Number((results[i]["rsHeal"]).toFixed(0)).toLocaleString();
        healAoE[i].innerHTML = Number((results[i]["aoeHeal"]).toFixed(0)).toLocaleString();
        healTotal[i].innerHTML = Number((results[i]["totalHeal"]).toFixed(0)).toLocaleString();
        percentTotal[i].innerHTML = Number(((results[i]["healPercent"] * 100)).toFixed(2));
    }

    document.getElementById("resultsHeal").innerHTML =  "Grid Heal: " + Number((results["totalGridHeal"]).toFixed(0)).toLocaleString();
}

function copyGrid(weaponGrid, copyNum) {
    document.getElementsByClassName("gridName")[copyNum].value = weaponGrid["gridName"];
    document.getElementsByClassName("pdefInput")[copyNum].value = weaponGrid["pdef"];
    document.getElementsByClassName("mdefInput")[copyNum].value = weaponGrid["mdef"];

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value = weaponGrid[i]["weaponType"];
        weaponTypeSelect(document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value, ((copyNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSkillModifier"];
        weaponModifierSelect(document.getElementsByClassName("weaponModifier")[(copyNum * 20) + i].value, ((copyNum * 20) + i));
        document.getElementsByClassName("weaponSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSkillLevel"];
        document.getElementsByClassName("weaponTargets")[(copyNum * 20) + i].value = weaponGrid[i]["weaponTargets"];
        document.getElementsByClassName("weaponSupSkill")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSupSkill"];
        document.getElementsByClassName("supportSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i]["supportSkillLevel"];
        document.getElementsByClassName("weaponName")[(copyNum * 20) + i].value = weaponGrid[i]["weaponName"];
    }

    document.getElementsByClassName("job")[copyNum].value = weaponGrid["job"];
}

function clearGrid(gridNum) {
    document.getElementsByClassName("gridName")[gridNum].value = '';
    document.getElementsByClassName("pdefInput")[gridNum].value = '';
    document.getElementsByClassName("mdefInput")[gridNum].value = '';

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value = 0;
        weaponTypeSelect(0, ((gridNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(gridNum * 20) + i].value = 0;
        weaponModifierSelect(0, ((gridNum * 20) + i));
        document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponSupSkill")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("supportSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponName")[(gridNum * 20) + i].value =  '';
    }

    document.getElementsByClassName("job")[gridNum].value = 0;
}

function clearCalcResults() {
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var damage = document.getElementsByClassName("resultHeal");
    var damageRS = document.getElementsByClassName("resultHealRS");
    var damageAoE = document.getElementsByClassName("resultHealAoE");
    var healTotal = document.getElementsByClassName("resultHealTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        weaponName[i].innerHTML = '';
        damage[i].innerHTML = '';
        damageRS[i].innerHTML = '';
        damageAoE[i].innerHTML = '';
        healTotal[i].innerHTML = '';
        percentTotal[i].innerHTML = '';
    }
}

function weaponTypeSelect(weaponType, index) {
    var weaponSkill = document.getElementsByClassName("weaponModifier")[index];

    if (weaponType == 1) {
        weaponSkill.innerHTML = '<option value="3">3</option><option value="2.78">2.78</option><option value="2.34">2.34</option><option value="2.33">2.33</option><option value="2.25">2.25</option><option value="2.04">2.04</option><option value="1.8">1.8</option><option value="1.5">1.5</option><option value="1.35">1.35</option>';
        weaponModifierSelect(3, index);
    } else {
        weaponSkill.innerHTML = '<option value="0">None</option>';
        weaponModifierSelect(0, index);
    }
}

function weaponModifierSelect(weaponMod, index) {
    var weaponTargets = document.getElementsByClassName("weaponTargets")[index];

    if (weaponMod == 3 || weaponMod == 2.78) {
        weaponTargets.innerHTML = '<option value="1">1</option>';
    } else if (weaponMod == 2.34 || weaponMod == 2.33 || weaponMod == 1.35) {
        weaponTargets.innerHTML = '<option value="1.5">1-2</option>';
    } else if (weaponMod == 1.5) {
        weaponTargets.innerHTML = '<option value="2">2</option>';
    } else if (weaponMod == 1.8) {
        weaponTargets.innerHTML = '<option value="1">1</option><option value="1.5">1-2</option>';
    } else if (weaponMod == 2.04) {
        weaponTargets.innerHTML = '<option value="1">1</option><option value="2">2</option>';
    } else if (weaponMod == 2.25) {
        weaponTargets.innerHTML = '<option value="1">1</option><option value="1.5">1-2</option><option value="2">2</option>';
    } else {
        weaponTargets.innerHTML = '<option value="0">None</option>';
    }
}

function exportGrid(gridNum) {
    var weaponGrid = createGrid(gridNum);
    var filename = document.getElementsByClassName("gridName")[gridNum].value;

    weaponGrid["role"] = "cleric";

    exportToJsonFile(weaponGrid, filename);
}

function exportToJsonFile(jsonData, filename) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    let exportFileDefaultName;

    if (filename == "") {
        exportFileDefaultName = 'weapongrid.json';
    } else {
        exportFileDefaultName = filename;
    }


    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importJsonFile(jsonData, gridNum) {
    var weaponGrid = jsonData;

    if (weaponGrid["role"] != "cleric") {
        window.alert("Incompatible import file");
        return false;
    }

    copyGrid(weaponGrid, gridNum);
}

function rsSelect(rsSelectValue) {
    var checkboxes = document.getElementsByClassName("rsCheck");
    var rsSkills = document.getElementsByClassName("weaponSupSkill");

    if (rsSelectValue == 0) {
        for (var i = 0; i < 20; i++) {
            checkboxes[i].checked = false;
            checkboxes[i].disabled = true;
        }
    } else if (rsSelectValue == 1) {
        for (var i = 0; i < 20; i++) {
            if (rsSkills[i].value > 0) {
                checkboxes[i].disabled = false;
            }
        }
    }
}