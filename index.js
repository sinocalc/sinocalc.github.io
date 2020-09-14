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

    clearCalcResults();

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
    document.getElementsByClassName("tableHeadingText")[0].innerHTML = 'Weapon Grid 1: ';
    document.getElementById("resultsDiv").innerHTML = "";
    clearGrid(1);

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
    }
    
    fr.readAsText(files.item(0));

    return false;
};

for (let i = 0; i < 40; i++) {
    document.getElementsByClassName("weaponType")[i].onchange = function() {
        weaponTypeSelect(document.getElementsByClassName("weaponType")[i].value, i);
    };
}

function checkInputs(numGrids) {
    var patk = document.getElementsByClassName("patkInput");
    var matk = document.getElementsByClassName("matkInput");
    var weaponType = document.getElementsByClassName("weaponType");
    var weaponSkillLevel = document.getElementsByClassName("weaponSkillLevel");
    var weaponSupSkill = document.getElementsByClassName("weaponSupSkill");
    var supportSkillLevel = document.getElementsByClassName("supportSkillLevel");

    for (var i = 0; i < numGrids; i++) {
        if (!Number.isInteger(+patk[i].value) || !Number.isInteger(+matk[i].value) || patk[i].value < 1 || matk[i].value < 1) {
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

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    processCalculate(mods);
}

function createGrid(gridNum) {
    var weaponGrid = {};

    weaponGrid["gridName"] = document.getElementsByClassName("gridName")[gridNum].value;
    weaponGrid["patk"] = document.getElementsByClassName("patkInput")[gridNum].value;
    weaponGrid["matk"] = document.getElementsByClassName("matkInput")[gridNum].value;

    for (var i = 0; i < 20; i++) {
        var weapon = {};

        weapon["weaponType"] = document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value;
        weapon["weaponSkillModifier"] = document.getElementsByClassName("weaponModifier")[(gridNum * 20) + i].value;
        weapon["weaponSkillLevel"] = document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value;
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
        var dcMod;
        var damageMods = {};

        dcMod = calculateDC(weaponGrid, numGrids);

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
                    } else if (weaponGrid["job"] == 4) {
                        jobMod = 1.35;
                    } else if (weaponGrid["job"] == 5 || weaponGrid["job"] == 6) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else if (weaponType == 2) {
                    if (weaponGrid["job"] == 1) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 5) {
                        jobMod = 1.35;
                    } else if (weaponGrid["job"] == 4 || weaponGrid["job"] == 7) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else if (weaponType == 3) {
                    if (weaponGrid["job"] == 2) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 6) {
                        jobMod = 1.35;
                    } else if (weaponGrid["job"] == 4 || weaponGrid["job"] == 7) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else {
                    if (weaponGrid["job"] == 3) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 7) {
                        jobMod = 1.35;
                    } else if (weaponGrid["job"] == 5 || weaponGrid["job"] == 6) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                }

                skillLevelMod = 1 + ((skillLevel - 1) * 0.025);

                if (skillLevel > 14) {
                    skillLevelMod += 0.025;
                }

                if (skillLevel == 20) {
                    skillLevelMod += 0.025;
                }

                totalMods = skillMod * skillLevelMod * dcMod * jobMod;
                
                weaponMod["modValue"] = totalMods;
            } else {
                weaponMod["modValue"] = 0;
            }

            damageMods[j] = weaponMod;
        }

        damageMods["dcMod"] = dcMod;

        mods[i] = damageMods;
    }

    return mods;
}

function calculateDC(weaponGrid, numGrids) {
    var dcMod = 1;

    for (var i = 0; i < 20; i++) {
        var skillLevelMod;
        var procRate;
        var instancedcMod;

        if (weaponGrid[i]["weaponSupSkill"] > 0) {
            if (weaponGrid[i]["supportSkillLevel"] == 20) {
                skillLevelMod = 1 + (20 * 0.025);
            } else {
                skillLevelMod = 1 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.025);
            }

            procRate = 0.04 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.005);

            if (weaponGrid[i]["supportSkillLevel"] > 14) {
                procRate += 0.005;
            }

            if (weaponGrid[i]["supportSkillLevel"] == 20) {
                procRate += 0.005;
            }

            instancedcMod = ((((weaponGrid[i]["weaponSupSkill"] * 5) + 5) / 100) * skillLevelMod * procRate)
        } else {
            instancedcMod = 0;
        }

        dcMod += instancedcMod;
    }

    return dcMod;
}

function processCompare(mods) {
    var results;

    createResultsRegion(2);
    results = compareResults(mods);
    compareRender(results);
}

function processCalculate(mods) {
    var results;

    createResultsRegion(1);
    results = calculateResults(mods);
    calculateRender(results);
}

function createResultsRegion(numGrids) {
    var pdefSlider = document.createElement("input");
    var mdefSlider = document.createElement("input");
    var comboSlider = document.createElement("input");
    var pdefText = document.createElement("input");
    var mdefText = document.createElement("input");
    var comboText = document.createElement("input");
    var patk = document.getElementsByClassName("patkInput");
    var matk = document.getElementsByClassName("matkInput");
    var resultsDiv = document.getElementById("resultsDiv");
    var sliderpatkDiv = document.createElement("div");
    var slidermatkDiv = document.createElement("div");
    var sliderComboDiv = document.createElement("div");
    var defValue1Div = document.createElement("div");
    var defValue2Div = document.createElement("div");
    var comboValueDiv = document.createElement("div");
    var resultsTextDiv = document.createElement("div");
    var resultsDamage = document.createElement("p");
    var resultsText = document.createElement("p");
    
    pdefSlider.id = "pdefSlider";
    pdefSlider.classList.add("slider");
    pdefSlider.type = "range";
    pdefSlider.min = 0;

    if (numGrids == 1) {
        pdefSlider.max = (3 / 2) * patk[0].value;
    } else {
        pdefSlider.max = (patk[0].value > patk[1].value) ? (3 / 2) * patk[1].value : (3 / 2) * patk[0].value;
    }

    pdefSlider.value = (pdefSlider.min + pdefSlider.max) / 2;
    mdefSlider.id = "mdefSlider";
    mdefSlider.classList.add("slider");
    mdefSlider.type = "range";
    mdefSlider.min = 0;

    if (numGrids == 1) {
        mdefSlider.max = (3 / 2) * matk[0].value;
    } else {
        mdefSlider.max = (matk[0].value > matk[1].value) ? (3 / 2) * matk[1].value : (3 / 2) * matk[0].value;
    }

    mdefSlider.value = (mdefSlider.min + mdefSlider.max) / 2;
    comboSlider.id = "comboSlider";
    comboSlider.classList.add("slider");
    comboSlider.type = "range";
    comboSlider.min = 0;
    comboSlider.max = 1000;
    comboSlider.value = 0;

    pdefText.id = "pdefText";
    pdefText.classList.add("sliderText");
    pdefText.type = "text";
    pdefText.value = pdefSlider.value;
    mdefText.id = "mdefText";
    mdefText.classList.add("sliderText");
    mdefText.type = "text";
    mdefText.value = mdefSlider.value;
    comboText.id = "comboText";
    comboText.classList.add("sliderText");
    comboText.type = "text";
    comboText.value = comboSlider.value;

    sliderpatkDiv.id = "sliderpatkDiv";
    sliderpatkDiv.classList.add("sliderDiv");
    slidermatkDiv.id = "slidermatkDiv";
    slidermatkDiv.classList.add("sliderDiv");
    sliderComboDiv.id = "sliderComboDiv";
    sliderComboDiv.classList.add("sliderDiv");
    defValue1Div.classList.add("defValueDiv");
    defValue1Div.id = "defValue1Div";
    defValue2Div.classList.add("defValueDiv");
    defValue2Div.id = "defValue2Div";
    comboValueDiv.classList.add("defValueDiv");
    comboValueDiv.id = "comboValueDiv";
    resultsTextDiv.id = "resultsTextDiv";
    resultsDamage.id = "resultsDamage";
    resultsText.id = "resultsText";

    defValue1Div.innerHTML = " P.Def";
    defValue2Div.innerHTML = " M.Def";
    comboValueDiv.innerHTML = " Combo";

    resultsDiv.innerHTML = "";

    sliderpatkDiv.appendChild(pdefSlider);
    sliderpatkDiv.appendChild(pdefText)
    sliderpatkDiv.appendChild(defValue1Div);
    slidermatkDiv.appendChild(mdefSlider);
    slidermatkDiv.appendChild(mdefText);
    slidermatkDiv.appendChild(defValue2Div);
    sliderComboDiv.appendChild(comboSlider);
    sliderComboDiv.appendChild(comboText);
    sliderComboDiv.appendChild(comboValueDiv);
    resultsTextDiv.appendChild(resultsDamage);
    resultsTextDiv.appendChild(resultsText);
    resultsDiv.appendChild(sliderpatkDiv);
    resultsDiv.appendChild(slidermatkDiv);
    resultsDiv.appendChild(sliderComboDiv);
    resultsDiv.appendChild(resultsTextDiv);

    if (numGrids == 1) {
        pdefSlider.oninput = function() {
            pdefText.value = pdefSlider.value;
        }

        pdefSlider.onchange = function() {
            sliderCalculateUpdate();
        }

        mdefSlider.oninput = function() {
            mdefText.value = mdefSlider.value;
        }

        mdefSlider.onchange = function() {
            sliderCalculateUpdate();
        }

        comboSlider.oninput = function() {
            comboText.value = comboSlider.value;
        }

        comboSlider.onchange = function() {
            sliderCalculateUpdate();
        }

        pdefText.onchange = function() {
            sliderCalculateUpdate();
            pdefSlider.value = pdefText.value;
        }

        mdefText.onchange = function() {
            sliderCalculateUpdate();
            mdefSlider.value = mdefText.value;
        }

        comboText.onchange = function() {
            sliderCalculateUpdate();
            comboSlider.value = comboText.value;
        }
    } else {
        pdefSlider.oninput = function() {
            pdefText.value = pdefSlider.value;
        }

        pdefSlider.onchange = function() {
            sliderCompareUpdate();
        }

        mdefSlider.oninput = function() {
            mdefText.value = mdefSlider.value;
        }

        mdefSlider.onchange = function() {
            sliderCompareUpdate();
        }

        comboSlider.oninput = function() {
            comboText.value = comboSlider.value;
        }

        comboSlider.onchange = function() {
            sliderCompareUpdate();
        }

        pdefText.onchange = function() {
            sliderCompareUpdate();
            pdefSlider.value = pdefText.value;
        }

        mdefText.onchange = function() {
            sliderCompareUpdate();
            mdefSlider.value = mdefText.value;
        }

        comboText.onchange = function() {
            sliderCompareUpdate();
            comboSlider.value = comboText.value;
        }
    }
}

function sliderCompareUpdate() {
    var weaponGrids = [];
    var mods;
    var results;

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    mods = calculateMods(weaponGrids, 2);
    results = compareResults(mods);
    compareRender(results);
}

function sliderCalculateUpdate() {
    var weaponGrids = [];
    var mods;
    var results;

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    results = calculateResults(mods);
    calculateRender(results);
}

function compareResults(mods) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefSlider = document.getElementById("pdefSlider");
    var mdefSlider = document.getElementById("mdefSlider"); 
    var pdef = pdefSlider.value;
    var mdef = mdefSlider.value; 
    var total = [];
    var strengthRatio;
    var results = [];
    var combo = document.getElementById("comboSlider").value;
    var comboMod = 1;

    if (combo > 1 && combo < 201) {
        comboMod = 1 + (combo * 0.0007);
    } else if (combo > 1 && combo < 501) {
        comboMod = 1 + ((200 * 0.0007) + ((combo - 200) * 0.0005));
    } else if (combo > 1 && combo < 1001) {
        comboMod = 1 + ((200 * 0.0007) + (300 * 0.0005) + ((combo - 500) * 0.00035));
    }

    pdefSlider.max = (patkValues[0].value > patkValues[1].value) ? (3 / 2) * comboMod * patkValues[1].value : (3 / 2) * comboMod * patkValues[0].value;
    mdefSlider.max = (matkValues[0].value > matkValues[1].value) ? (3 / 2) * comboMod * matkValues[1].value : (3 / 2) * comboMod * matkValues[0].value;

    for (var i = 0; i < 2; i++) {
        var weaponMods = mods[i];
        var damageTotal = 0;
        var patk = patkValues[i].value;
        var matk = matkValues[i].value;

        for (var j = 0; j < 20; j++) {
            if (weaponMods[j]["weaponType"] == 1 || weaponMods[j]["weaponType"] == 2) {
                if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                    damageTotal += 1 / 0.05 / 0.95;
                } else {
                    damageTotal += ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j]["modValue"];
                }
            } else if (weaponMods[j]["weaponType"] == 3 || weaponMods[j]["weaponType"] == 4) {
                if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                    damageTotal += 1 / 0.05 / 0.95;
                } else {
                    damageTotal += ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j]["modValue"];
                }
            } else {
                damageTotal += 0;
            }
        }

        total[i] = damageTotal * 0.05 * 0.95;
    }

    if (total[0] > total[1]) {
        if (total[1] > 0) {
            strengthRatio = ((total[0] / total[1]) * 100);
            results[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0)).toLocaleString();
            results[1] = "Grid 1 damage is " + Number((strengthRatio).toFixed(2)) + "% of Grid 2";
        } else {
            results[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0)).toLocaleString();
            results[1] = "Grid 2 will only do 20 damage past this point";
        }
    } else if (total[1] > total[0]) {
        if (total[0] > 0) {
            strengthRatio = ((total[1] / total[0]) * 100);
            results[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0)).toLocaleString();
            results[1] = "Grid 2 damage is " + Number((strengthRatio).toFixed(2)) + "% of Grid 1";
        } else {
            results[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0)).toLocaleString();
            results[1] = "Grid 1 will only do 20 damage past this point";
        }
    } else {
        results[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0)).toLocaleString();
        results[1] = "The grids are equal in strength";
    }

    return results;
}

function calculateResults(mods) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefSlider = document.getElementById("pdefSlider");
    var mdefSlider = document.getElementById("mdefSlider"); 
    var pdef = pdefSlider.value;
    var mdef = mdefSlider.value; 
    var totalResults = {};
    var combo = document.getElementById("comboSlider").value;
    var comboMod = 1;

    if (combo > 1 && combo < 201) {
        comboMod = 1 + (combo * 0.0007);
    } else if (combo > 1 && combo < 501) {
        comboMod = 1 + ((200 * 0.0007) + ((combo - 200) * 0.0005));
    } else if (combo > 1 && combo < 1001) {
        comboMod = 1 + ((200 * 0.0007) + (300 * 0.0005) + ((combo - 500) * 0.00035));
    }

    pdefSlider.max = (3 / 2) * comboMod * patkValues[0].value;
    mdefSlider.max = (3 / 2) * comboMod * matkValues[0].value;

    var weaponMods = mods[0];
    var damageTotal = 0;
    var patk = patkValues[0].value;
    var matk = matkValues[0].value;

    for (var j = 0; j < 20; j++) {
        var weaponResults = {};

        if (weaponMods[j]["weaponType"] == 1) {
            if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                weaponResults["baseDmg"] = 1 / 0.05 / 0.95;
                weaponResults["dcDmg"] = weaponResults["baseDmg"];
            } else {
                weaponResults["baseDmg"] = ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j]["modValue"] / weaponMods["dcMod"];
                weaponResults["dcDmg"] = weaponResults["baseDmg"] * weaponMods["dcMod"];
            }
            weaponResults["aoeDmg"] = weaponResults["baseDmg"];
            weaponResults["totalDmg"] = weaponResults["dcDmg"];
            damageTotal += weaponResults["totalDmg"];
        } else if (weaponMods[j]["weaponType"] == 2) {
            if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                weaponResults["baseDmg"] = 1 / 0.05 / 0.95;
                weaponResults["dcDmg"] = weaponResults["baseDmg"];
                weaponResults["aoeDmg"] = weaponResults["baseDmg"];
                weaponResults["totalDmg"] = weaponResults["baseDmg"];
            } else {
                weaponResults["baseDmg"] = ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j]["modValue"] / weaponMods["dcMod"] / 1.5;
                weaponResults["dcDmg"] = weaponResults["baseDmg"] * weaponMods["dcMod"];
                weaponResults["aoeDmg"] = weaponResults["baseDmg"] * 1.5;
                weaponResults["totalDmg"] = weaponResults["dcDmg"] * 1.5;
            }
            damageTotal += weaponResults["totalDmg"];
        } else if (weaponMods[j]["weaponType"] == 3) {
            if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                weaponResults["baseDmg"] = 1 / 0.05 / 0.95;
                weaponResults["dcDmg"] = weaponResults["baseDmg"];
            } else {
                weaponResults["baseDmg"] = ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j]["modValue"] / weaponMods["dcMod"] / 1.5;
                weaponResults["dcDmg"] = weaponResults["baseDmg"] * weaponMods["dcMod"];
            }
            weaponResults["aoeDmg"] = weaponResults["baseDmg"];
            weaponResults["totalDmg"] = weaponResults["dcDmg"];
            damageTotal += weaponResults["totalDmg"];
        } else if (weaponMods[j]["weaponType"] == 4) {
            if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                weaponResults["baseDmg"] = 1 / 0.05 / 0.95;
                weaponResults["dcDmg"] = weaponResults["baseDmg"];
                weaponResults["aoeDmg"] = weaponResults["baseDmg"];
                weaponResults["totalDmg"] = weaponResults["baseDmg"];
            } else {
                weaponResults["baseDmg"] = ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j]["modValue"] / weaponMods["dcMod"] / 1.5;
                weaponResults["dcDmg"] = weaponResults["baseDmg"] * weaponMods["dcMod"];
                weaponResults["aoeDmg"] = weaponResults["baseDmg"] * 1.5;
                weaponResults["totalDmg"] = weaponResults["dcDmg"] * 1.5;
            }
            damageTotal += weaponResults["totalDmg"];
        } else {
            weaponResults["baseDmg"] = 0;
            weaponResults["dcDmg"] = 0;
            weaponResults["aoeDmg"] = 0;
            weaponResults["totalDmg"] = 0;
            damageTotal += 0;
        }

        weaponResults["weaponType"] = weaponMods[j]["weaponType"];
        totalResults[j] = weaponResults;
    }

    for (var i = 0; i < 20; i++) {
        if (damageTotal != 0) {
            totalResults[i]["dmgPercent"] = totalResults[i]["totalDmg"] / damageTotal;
        } else {
            totalResults[i]["dmgPercent"] = 0;
        }

        totalResults[i]["baseDmg"] *= (0.05 * 0.95);
        totalResults[i]["dcDmg"] *= (0.05 * 0.95);
        totalResults[i]["aoeDmg"] *= (0.05 * 0.95);
        totalResults[i]["totalDmg"] *= (0.05 * 0.95);
    }

    totalResults["totalGridDmg"] = damageTotal * 0.05 * 0.95;

    return totalResults;
}

function compareRender(results) {
    document.getElementById("resultsDamage").innerHTML = results[0]
    document.getElementById("resultsText").innerHTML = results[1];
}

function calculateRender(results) {
    var gridWeaponName = document.getElementsByClassName("weaponName");
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var damage = document.getElementsByClassName("resultDamage");
    var damageDC = document.getElementsByClassName("resultDamageDC");
    var damageAoE = document.getElementsByClassName("resultDamageAoE");
    var damageTotal = document.getElementsByClassName("resultDamageTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        if (results[i]["weaponType"] == 0) {
            weaponName[i].innerHTML = "None";
        } else if (gridWeaponName[i].value == "") {
            weaponName[i].innerHTML = "Weapon " + (i + 1);
        } else {
            weaponName[i].innerHTML = gridWeaponName[i].value;
        }

        damage[i].innerHTML = Number((results[i]["baseDmg"]).toFixed(0)).toLocaleString();
        damageDC[i].innerHTML = Number((results[i]["dcDmg"]).toFixed(0)).toLocaleString();
        damageAoE[i].innerHTML = Number((results[i]["aoeDmg"]).toFixed(0)).toLocaleString();
        damageTotal[i].innerHTML = Number((results[i]["totalDmg"]).toFixed(0)).toLocaleString();
        percentTotal[i].innerHTML = Number(((results[i]["dmgPercent"] * 100)).toFixed(2));
    }

    document.getElementById("resultsDamage").innerHTML =  "Grid Damage: " + Number((results["totalGridDmg"]).toFixed(0)).toLocaleString();
}

function copyGrid(weaponGrid, copyNum) {
    document.getElementsByClassName("gridName")[copyNum].value = weaponGrid["gridName"];
    document.getElementsByClassName("patkInput")[copyNum].value = weaponGrid["patk"];
    document.getElementsByClassName("matkInput")[copyNum].value = weaponGrid["matk"];

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value = weaponGrid[i]["weaponType"];
        weaponTypeSelect(document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value, ((copyNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSkillModifier"];
        document.getElementsByClassName("weaponSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSkillLevel"];
        document.getElementsByClassName("weaponSupSkill")[(copyNum * 20) + i].value = weaponGrid[i]["weaponSupSkill"];
        document.getElementsByClassName("supportSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i]["supportSkillLevel"];
        document.getElementsByClassName("weaponName")[(copyNum * 20) + i].value = weaponGrid[i]["weaponName"];
    }

    document.getElementsByClassName("job")[copyNum].value = weaponGrid["job"];
}

function clearGrid(gridNum) {
    document.getElementsByClassName("gridName")[gridNum].value = '';
    document.getElementsByClassName("patkInput")[gridNum].value = '';
    document.getElementsByClassName("matkInput")[gridNum].value = '';

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value = 0;
        weaponTypeSelect(0, ((gridNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponSupSkill")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("supportSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponName")[(gridNum * 20) + i].value =  '';
    }

    document.getElementsByClassName("job")[gridNum].value = 0;
}

function clearCalcResults() {
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var damage = document.getElementsByClassName("resultDamage");
    var damageDC = document.getElementsByClassName("resultDamageDC");
    var damageAoE = document.getElementsByClassName("resultDamageAoE");
    var damageTotal = document.getElementsByClassName("resultDamageTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        weaponName[i].innerHTML = '';
        damage[i].innerHTML = '';
        damageDC[i].innerHTML = '';
        damageAoE[i].innerHTML = '';
        damageTotal[i].innerHTML = '';
        percentTotal[i].innerHTML = '';
    }
}

function weaponTypeSelect(weaponType, index) {
    var weaponSkill = document.getElementsByClassName("weaponModifier")[index];

    if (weaponType == 1 || weaponType == 3) {
        weaponSkill.innerHTML = '<option value="2.7">Tier IV</option><option value="2">Tier III</option><option value="1.6">Tier II</option><option value="1">Tier I</option><option value="2.5">Tier III heal/buff/debuff</option><option value="1.8">Tier II heal/buff/debuff</option>';
    } else if (weaponType == 2 || weaponType == 4) {
        weaponSkill.innerHTML = '<option value="3.45">Tier III</option><option value="2.55">Tier II</option><option value="2.1">Tier I</option><option value="3.15">Tier III heal/buff/debuff</option><option value="2.4">Tier II heal/buff/debuff</option><option value="2.25">Tier I heal/buff/debuff</option>';
    } else {
        weaponSkill.innerHTML = '<option value="0">None</option>';
    }
}

function exportGrid(gridNum) {
    var weaponGrid = createGrid(gridNum);
    var filename = document.getElementsByClassName("gridName")[gridNum].value;

    weaponGrid["role"] = "vanguard";

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

    if (weaponGrid["role"] != "vanguard") {
        window.alert("Incompatible import file");
        return false;
    }

    copyGrid(weaponGrid, gridNum);
}