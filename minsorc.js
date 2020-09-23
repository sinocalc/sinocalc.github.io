window.onload = function() {
    var height = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("statValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";
};

window.onresize = function() {
    var height = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("statValue")[0].clientHeight;
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
    sbSelect(0);
    document.getElementById("attenuationSelectDiv").style.display = "none";
    document.getElementById("shinmaSelectDiv").style.display = "none";
    document.getElementById("sbSelectDiv").style.display = "none";
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
};

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
    height += document.getElementsByClassName("statValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";

    return false;
};

document.getElementById("openCompareBtn").onclick = function() {
    document.getElementById("weaponGrid2").style.display = "inline-block";
    document.getElementById("weaponGrid1Results").style.display = "none";
    document.getElementById("exportSelect").style.display = "inline-block";
    document.getElementById("copyDiv").style.display = "block";
    document.getElementById("sbSelect").value = 0;
    document.getElementById("shinmaSelect").value = 0;
    document.getElementById("attenuationSelect").value = 1;
    document.getElementById("shinmaSelectDiv").style.display = "none";
    document.getElementById("attenuationSelectDiv").style.display = "none";
    document.getElementById("sbSelectDiv").style.display = "none";
    document.getElementsByClassName("tableHeadingText")[0].innerHTML = 'Weapon Grid 1: ';
    document.getElementById("resultsDiv").innerHTML = "";

    sbSelect(0);
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

        var sbSelectValue = document.getElementById("sbSelect").value;
        sbSelect(sbSelectValue);
    }
    
    fr.readAsText(files.item(0));

    return false;
};

document.getElementById("attenuationSelect").onchange = function() {
    calculateUpdate();

    return false;
};

document.getElementById("shinmaSelect").onchange = function() {
    calculateUpdate();

    return false;
};

document.getElementById("sbSelect").onchange = function() {
    var sbSelectValue = document.getElementById("sbSelect").value;

    sbSelect(sbSelectValue);
    calculateUpdate();

    return false;
};

for (let i = 0; i < 40; i++) {
    document.getElementsByClassName("weaponType")[i].onchange = function() {
        weaponTypeSelect(document.getElementsByClassName("weaponType")[i].value, i);

        return false;
    };

    if (i < 20) {
        document.getElementsByClassName("sbCheck")[i].onchange = function() {
            calculateUpdate();

            return false;
        }
    }
}

function checkInputs(numGrids) {
    var patk = document.getElementsByClassName("patkInput");
    var matk = document.getElementsByClassName("matkInput");
    var pdef = document.getElementsByClassName("pdefInput");
    var mdef = document.getElementsByClassName("mdefInput");
    var weaponType = document.getElementsByClassName("weaponType");
    var weaponSkillLevel = document.getElementsByClassName("weaponSkillLevel");
    var weaponSupSkill = document.getElementsByClassName("weaponSupSkill");
    var supportSkillLevel = document.getElementsByClassName("supportSkillLevel");

    for (var i = 0; i < numGrids; i++) {
        if (!Number.isInteger(+pdef[i].value) || !Number.isInteger(+mdef[i].value) || pdef[i].value < 1 || mdef[i].value < 1 || !Number.isInteger(+patk[i].value) || !Number.isInteger(+matk[i].value) || patk[i].value < 1 || matk[i].value < 1) {
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

    document.getElementById("sbSelect").value = 0;
    document.getElementById("shinmaSelect").value = 0;
    document.getElementById("attenuationSelect").value = 1;

    sbSelect(0);

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    processCalculate(mods);

    document.getElementById("shinmaSelectDiv").style.display = "inline-block";
    document.getElementById("attenuationSelectDiv").style.display = "inline-block";
    document.getElementById("sbSelectDiv").style.display = "inline-block";
}

function createGrid(gridNum) {
    var weaponGrid = {};

    weaponGrid["gridName"] = document.getElementsByClassName("gridName")[gridNum].value;
    weaponGrid["patk"] = document.getElementsByClassName("patkInput")[gridNum].value;
    weaponGrid["matk"] = document.getElementsByClassName("matkInput")[gridNum].value;
    weaponGrid["pdef"] = document.getElementsByClassName("pdefInput")[gridNum].value;
    weaponGrid["mdef"] = document.getElementsByClassName("mdefInput")[gridNum].value;

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
        var sbMod;
        var buffMods = {};

        sbMod = calculateSB(weaponGrid, numGrids);

        for (var j = 0; j < 20; j++) {
            var weapon = weaponGrid[j];
            var weaponType = weapon["weaponType"];
            var weaponSkill;
            var skillModPatk; 
            var skillModMatk; 
            var skillModPdef; 
            var skillModMdef; 
            var skillLevel = weapon["weaponSkillLevel"];
            var skillLevelMod;
            var jobMod;
            var weaponMod = {};

            weaponMod["weaponType"] = weaponType;

            if (weaponType > 0) {
                if (weaponType == 1) {
                    weaponSkill = debuffSkills[weapon["weaponSkillModifier"]];
                } else if (weaponType == 2) {
                    weaponSkill = buffSkills[weapon["weaponSkillModifier"]];
                }

                weaponMod["targets"] = weaponSkill["targets"];
                weaponMod["tier"] = weaponSkill["tier"];
                skillModPatk = weaponSkill["patk"]; 
                skillModMatk = weaponSkill["matk"]; 
                skillModPdef = weaponSkill["pdef"]; 
                skillModMdef = weaponSkill["mdef"]; 

                if (weaponType == 1) {
                    if (weaponGrid["job"] == 0) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 2) {
                        jobMod = 1.15;
                    } else if (weaponGrid["job"] == 3) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else if (weaponType == 2) {
                    if (weaponGrid["job"] == 1) {
                        jobMod = 1.1;
                    } else if (weaponGrid["job"] == 3) {
                        jobMod = 1.15;
                    } else if (weaponGrid["job"] == 2) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                }

                skillLevelMod = 1 + ((skillLevel - 1) * 0.04);

                if (skillLevel > 14) {
                    skillLevelMod += 0.04;
                }

                if (skillLevel == 20) {
                    skillLevelMod += 0.05;
                }

                weaponMod["patkModValue"] = skillModPatk * skillLevelMod * sbMod * jobMod;
                weaponMod["matkModValue"] = skillModMatk * skillLevelMod * sbMod * jobMod;
                weaponMod["pdefModValue"] = skillModPdef * skillLevelMod * sbMod * jobMod;
                weaponMod["mdefModValue"] = skillModMdef * skillLevelMod * sbMod * jobMod;
                
            } else {
                weaponMod["patkModValue"] = 0;
                weaponMod["matkModValue"] = 0;
                weaponMod["pdefModValue"] = 0;
                weaponMod["mdefModValue"] = 0;
            }

            buffMods[j] = weaponMod;
        }

        buffMods["sbMod"] = sbMod;

        mods[i] = buffMods;
    }

    return mods;
}

function calculateSB(weaponGrid, numGrids) {
    var sbMod = 1;
    var sbSelectValue = document.getElementById("sbSelect").value;
    var sbCheckBoxes = document.getElementsByClassName("sbCheck");

    if (numGrids == 1 && sbSelectValue == 1) {
        for (var i = 0; i < 20; i++) {
            if (sbCheckBoxes[i].checked == true) {
                var skillLevelMod;
                var instancesbMod;

                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    skillLevelMod = 1 + (20 * 0.05);
                } else {
                    skillLevelMod = 1 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.05);
                }

                instancesbMod = ((((weaponGrid[i]["weaponSupSkill"] * 5) + 5) / 100) * skillLevelMod)

                sbMod += instancesbMod;
            }
        }
    } else {
        for (var i = 0; i < 20; i++) {
            var skillLevelMod;
            var procRate;
            var instancesbMod;

            if (weaponGrid[i]["weaponSupSkill"] > 0) {
                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    skillLevelMod = 1 + (20 * 0.05);
                } else {
                    skillLevelMod = 1 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.05);
                }

                procRate = 0.04 + ((weaponGrid[i]["supportSkillLevel"] - 1) * 0.005);

                if (weaponGrid[i]["supportSkillLevel"] > 14) {
                    procRate += 0.005;
                }

                if (weaponGrid[i]["supportSkillLevel"] == 20) {
                    procRate += 0.005;
                }

                instancesbMod = ((((weaponGrid[i]["weaponSupSkill"] * 5) + 5) / 100) * skillLevelMod * procRate)
            } else {
                instancesbMod = 0;
            }

            sbMod += instancesbMod;
        }
    }

    return sbMod;
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
    var resultsDiv = document.getElementById("resultsDiv");
    var resultsSelectDiv = document.createElement("div");
    var selectText = document.createElement("p");
    var selectInput = document.createElement("select");
    var resultsTextDiv = document.createElement("div");
    var resultsBuff1 = document.createElement("p");
    var resultsText1 = document.createElement("p");
    var resultsBuff2 = document.createElement("p");
    var resultsText2 = document.createElement("p");
    
    selectText.id = "resultsSelectText";
    selectInput.id = "resultsSelectInput";
    resultsSelectDiv.id = "resultsSelectDiv";
    resultsTextDiv.id = "resultsTextDiv";
    resultsBuff1.id = "resultsBuff1";
    resultsText1.id = "resultsText1";
    resultsBuff2.id = "resultsBuff2";
    resultsText2.id = "resultsText2";

    selectText.innerHTML = "Stat: "
    selectInput.innerHTML = "<option value='0'>P.Atk</option><option value='1'>M.Atk</option><option value='2'>P.Def</option><option value='3'>M.Def</option>";
    resultsDiv.innerHTML = "";
    
    resultsSelectDiv.appendChild(selectText);
    resultsSelectDiv.appendChild(selectInput);
    resultsTextDiv.appendChild(resultsBuff1);
    resultsTextDiv.appendChild(resultsText1);
    resultsTextDiv.appendChild(resultsBuff2);
    resultsTextDiv.appendChild(resultsText2);
    resultsDiv.appendChild(resultsSelectDiv);
    resultsDiv.appendChild(resultsTextDiv);

    if (numGrids == 1) {
        selectInput.onchange = function() {
            calculateUpdate();
        };
    } else {
        selectInput.onchange = function() {
            compareUpdate();
        };
    }
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
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefValues = document.getElementsByClassName("pdefInput");
    var mdefValues = document.getElementsByClassName("mdefInput");
    var results = [];

    for (var i = 0; i < 2; i++) {
        var weaponMods = mods[i];
        var buffTotal = {};
        var patkDebuffTotal = 0;
        var matkDebuffTotal = 0;
        var pdefDebuffTotal = 0;
        var mdefDebuffTotal = 0;
        var patkBuffTotal = 0;
        var matkBuffTotal = 0;
        var pdefBuffTotal = 0;
        var mdefBuffTotal = 0;
        var patk = patkValues[i].value;
        var matk = matkValues[i].value;
        var pdef = pdefValues[i].value;
        var mdef = mdefValues[i].value;

        for (var j = 0; j < 20; j++) {
            var weaponType = weaponMods[j]["weaponType"];
            var weaponTargets = weaponMods[j]["targets"];

            if (weaponType == 1) {
                patkDebuffTotal += Number(patk) * weaponMods[j]["patkModValue"] * weaponTargets * 0.05 * 0.95;
                matkDebuffTotal += Number(matk) * weaponMods[j]["matkModValue"] * weaponTargets * 0.05 * 0.95;
                pdefDebuffTotal += Number(pdef) * weaponMods[j]["pdefModValue"] * weaponTargets * 0.05 * 0.95;
                mdefDebuffTotal += Number(mdef) * weaponMods[j]["mdefModValue"] * weaponTargets * 0.05 * 0.95;
            } else if (weaponType == 2) {
                patkBuffTotal += Number(patk) * weaponMods[j]["patkModValue"] * weaponTargets * 0.05 * 0.95;
                matkBuffTotal += Number(matk) * weaponMods[j]["matkModValue"] * weaponTargets * 0.05 * 0.95;
                pdefBuffTotal += Number(pdef) * weaponMods[j]["pdefModValue"] * weaponTargets * 0.05 * 0.95;
                mdefBuffTotal += Number(mdef) * weaponMods[j]["mdefModValue"] * weaponTargets * 0.05 * 0.95;
            } else {
                patkDebuffTotal += 0;
                matkDebuffTotal += 0;
                pdefDebuffTotal += 0;
                mdefDebuffTotal += 0;
                patkBuffTotal += 0;
                matkBuffTotal += 0;
                pdefBuffTotal += 0;
                mdefBuffTotal += 0;
            }
        }

        buffTotal["patkDebuff"] = patkDebuffTotal;
        buffTotal["matkDebuff"] = matkDebuffTotal;
        buffTotal["pdefDebuff"] = pdefDebuffTotal;
        buffTotal["mdefDebuff"] = mdefDebuffTotal;
        buffTotal["patkBuff"] = patkBuffTotal;
        buffTotal["matkBuff"] = matkBuffTotal;
        buffTotal["pdefBuff"] = pdefBuffTotal;
        buffTotal["mdefBuff"] = mdefBuffTotal;
        results[i] = buffTotal ;
    }

    return results;
}

function calculateResults(mods) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefValues = document.getElementsByClassName("pdefInput");
    var mdefValues = document.getElementsByClassName("mdefInput");
    var attenuation = document.getElementById("attenuationSelect").value;
    var shinmaSelectValue = document.getElementById("shinmaSelect").value;
    var shinmaCalcResults;
    var totalResults = [];
    var weaponMods = mods[0];
    var buffTotal = [0, 0, 0, 0];
    var debuffTotal = [0, 0, 0, 0];
    var patk = patkValues[0].value;
    var matk = matkValues[0].value;
    var pdef = pdefValues[0].value;
    var mdef = mdefValues[0].value;
    var stat = [patk, matk, pdef, mdef];
    var statSelector = ["patkModValue", "matkModValue", "pdefModValue", "mdefModValue"];

    for (var j = 0; j < 20; j++) {
        var weaponResults = [{}, {}, {}, {}];
        var weaponTargets = weaponMods[j]["targets"];

        for (var k = 0; k < 4; k++) {
            if (weaponMods[j]["weaponType"] == 1) {
                    weaponResults[k]["baseBuff"] = -1 * Number(stat[k]) * weaponMods[j][statSelector[k]] / weaponMods["sbMod"] * attenuation;
                    weaponResults[k]["sbBuff"] = weaponResults[k]["baseBuff"] * weaponMods["sbMod"];
                    weaponResults[k]["aoeBuff"] = weaponResults[k]["baseBuff"] * weaponTargets;
                    weaponResults[k]["totalBuff"] = weaponResults[k]["sbBuff"] * weaponTargets;
                    weaponResults[k]["tier"] = weaponMods[j]["tier"];
                    debuffTotal[k] += weaponResults[k]["totalBuff"];
            } else if (weaponMods[j]["weaponType"] == 2) {
                    weaponResults[k]["baseBuff"] = Number(stat[k]) * weaponMods[j][statSelector[k]] / weaponMods["sbMod"] * attenuation;
                    weaponResults[k]["sbBuff"] = weaponResults[k]["baseBuff"] * weaponMods["sbMod"];
                    weaponResults[k]["aoeBuff"] = weaponResults[k]["baseBuff"] * weaponTargets;
                    weaponResults[k]["totalBuff"] = weaponResults[k]["sbBuff"] * weaponTargets;
                    weaponResults[k]["tier"] = weaponMods[j]["tier"];
                    buffTotal[k] += weaponResults[k]["totalBuff"];
            } else {
                    weaponResults[k]["baseBuff"] = 0;
                    weaponResults[k]["sbBuff"] = 0;
                    weaponResults[k]["aoeBuff"] = 0;
                    weaponResults[k]["totalBuff"] = 0;
                    weaponResults[k]["tier"] = 0;
                    buffTotal[k] += 0;
                    debuffTotal[k] += 0;
            }
        }

        weaponResults["weaponType"] = weaponMods[j]["weaponType"];
        totalResults[j] = weaponResults;
    }

    if (shinmaSelectValue > 0) {
        shinmaCalcResults = shinmaCalc(totalResults);
        totalResults = shinmaCalcResults[0];
        buffTotal = shinmaCalcResults[1];
        debuffTotal = shinmaCalcResults[2];
    }

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 4; j++) {
            if (buffTotal[j] != 0 && totalResults[i]["weaponType"] == 2) {
                totalResults[i][j]["buffPercent"] = totalResults[i][j]["totalBuff"] / buffTotal[j];
            } else if (debuffTotal[j] != 0 && totalResults[i]["weaponType"] == 1) {
                totalResults[i][j]["buffPercent"] = totalResults[i][j]["totalBuff"] / debuffTotal[j];
            } else {
                totalResults[i][j]["buffPercent"] = 0;
            }

            totalResults[i][j]["baseBuff"] *= (0.05 * 0.95);
            totalResults[i][j]["sbBuff"] *= (0.05 * 0.95);
            totalResults[i][j]["aoeBuff"] *= (0.05 * 0.95);
            totalResults[i][j]["totalBuff"] *= (0.05 * 0.95);
        }
    }

    totalResults["totalGridBuff"] = [];
    totalResults["totalGridDebuff"] = [];

    for (var i = 0; i < 4; i++) {
        totalResults["totalGridBuff"][i] = buffTotal[i] * 0.05 * 0.95;
        totalResults["totalGridDebuff"][i] = debuffTotal[i] * 0.05 * 0.95;
    }

    return totalResults;
}

function shinmaCalc(totalResults) {
    var shinmaSelectValue = document.getElementById("shinmaSelect").value;
    var shinmaMod;
    var shinmaResults = [];
    var totalBuff = [0, 0, 0, 0];
    var totalDebuff = [0, 0, 0, 0];
    var shinmaCalcResults = [];

    for (var i = 0; i < 20; i++) {
        var weaponResults = totalResults[i];

        for (var j = 0; j < 4; j++) {
            if ((shinmaSelectValue == 1 && weaponResults["weaponType"] == 1) || (shinmaSelectValue == 2 && weaponResults["weaponType"] == 2)) {
                if (weaponResults[j]["tier"] == 4 || weaponResults[j]["tier"] == 3) {
                    shinmaMod = 2.9;
                } else if (weaponResults[j]["tier"] == 2) {
                    shinmaMod = 1.6;
                } else if (weaponResults[j]["tier"] == 1) {
                    shinmaMod = 1.3;
                }

                weaponResults[j]["baseBuff"] *= shinmaMod;
                weaponResults[j]["sbBuff"] *= shinmaMod;
                weaponResults[j]["aoeBuff"] *= shinmaMod;
                weaponResults[j]["totalBuff"] *= shinmaMod;
            } 

            if (weaponResults["weaponType"] == 1) {
                totalBuff[j] += weaponResults[j]["totalBuff"];
            } else {
                totalDebuff[j] += weaponResults[j]["totalBuff"];
            }
        }
        shinmaResults[i] = weaponResults;
    }

    shinmaCalcResults[0] = shinmaResults;
    shinmaCalcResults[1] = totalDebuff;
    shinmaCalcResults[2] = totalBuff;

    return shinmaCalcResults;
}

function compareRender(results) {
    var statSelect = document.getElementById("resultsSelectInput").value;
    var strengthRatio1;
    var strengthRatio2;
    var total = [];
    var resultStrings = [];

    if (statSelect == 0) {
        total[0] = results[0]["patkBuff"];
        total[1] = results[1]["patkBuff"];
        total[2] = results[0]["patkDebuff"];
        total[3] = results[1]["patkDebuff"];
    } else if (statSelect == 1) {
        total[0] = results[0]["matkBuff"];
        total[1] = results[1]["matkBuff"];
        total[2] = results[0]["matkDebuff"];
        total[3] = results[1]["matkDebuff"];
    } else if (statSelect == 2) {
        total[0] = results[0]["pdefBuff"];
        total[1] = results[1]["pdefBuff"];
        total[2] = results[0]["pdefDebuff"];
        total[3] = results[1]["pdefDebuff"];
    } else {
        total[0] = results[0]["mdefBuff"];
        total[1] = results[1]["mdefBuff"];
        total[2] = results[0]["mdefDebuff"];
        total[3] = results[1]["mdefDebuff"];
    }

    if (total[0] > total[1]) {
        strengthRatio1 = ((total[0] / total[1]) * 100);
        resultStrings[0] = "Grid 1 Buffs: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Buffs: " + Number((total[1]).toFixed(0)).toLocaleString();
        resultStrings[1] = "Grid 1 buffing is " + Number((strengthRatio1).toFixed(2)) + "% of Grid 2";
    } else if (total[1] > total[0]) {
        strengthRatio1 = ((total[1] / total[0]) * 100);
        resultStrings[0] = "Grid 1 Buffs: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Buffs: " + Number((total[1]).toFixed(0)).toLocaleString();
        resultStrings[1] = "Grid 2 buffing is " + Number((strengthRatio1).toFixed(2)) + "% of Grid 1";
    } else {
        resultStrings[0] = "Grid 1 Buffs: " + Number((total[0]).toFixed(0)).toLocaleString() + "<br>Grid 2 Buffs: " + Number((total[1]).toFixed(0)).toLocaleString();
        resultStrings[1] = "The grids are equal in buffing strength";
    }

    if (total[2] > total[3]) {
        strengthRatio2 = ((total[2] / total[3]) * 100);
        resultStrings[2] = "Grid 1 Debuffs: " + Number((total[2]).toFixed(0)).toLocaleString() + "<br>Grid 2 Debuffs: " + Number((total[3]).toFixed(0)).toLocaleString();
        resultStrings[3] = "Grid 1 debuffing is " + Number((strengthRatio2).toFixed(2)) + "% of Grid 2";
    } else if (total[3] > total[2]) {
        strengthRatio2 = ((total[3] / total[2]) * 100);
        resultStrings[2] = "Grid 1 Debuffs: " + Number((total[2]).toFixed(0)).toLocaleString() + "<br>Grid 2 Debuffs: " + Number((total[3]).toFixed(0)).toLocaleString();
        resultStrings[3] = "Grid 2 debuffing is " + Number((strengthRatio2).toFixed(2)) + "% of Grid 1";
    } else {
        resultStrings[2] = "Grid 1 Debuffs: " + Number((total[2]).toFixed(0)).toLocaleString() + "<br>Grid 2 Debuffs: " + Number((total[3]).toFixed(0)).toLocaleString();
        resultStrings[3] = "The grids are equal in debuffing strength";
    }

    document.getElementById("resultsBuff1").innerHTML = resultStrings[0]
    document.getElementById("resultsText1").innerHTML = resultStrings[1];
    document.getElementById("resultsBuff2").innerHTML = resultStrings[2]
    document.getElementById("resultsText2").innerHTML = resultStrings[3];
}

function calculateRender(results) {
    var gridWeaponName = document.getElementsByClassName("weaponName");
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var buff = document.getElementsByClassName("resultBuff");
    var buffSB = document.getElementsByClassName("resultBuffSB");
    var buffAoE = document.getElementsByClassName("resultBuffAoE");
    var buffTotal = document.getElementsByClassName("resultBuffTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");
    var statSelect = document.getElementById("resultsSelectInput").value;

    for (var i = 0; i < 20; i++) {
        if (results[i]["weaponType"] == 0) {
            weaponName[i].innerHTML = "None";
        } else if (gridWeaponName[i].value == "") {
            weaponName[i].innerHTML = "Weapon " + (i + 1);
        } else {
            weaponName[i].innerHTML = gridWeaponName[i].value;
        }

        buff[i].innerHTML = Number((results[i][statSelect]["baseBuff"]).toFixed(0)).toLocaleString();
        buffSB[i].innerHTML = Number((results[i][statSelect]["sbBuff"]).toFixed(0)).toLocaleString();
        buffAoE[i].innerHTML = Number((results[i][statSelect]["aoeBuff"]).toFixed(0)).toLocaleString();
        buffTotal[i].innerHTML = Number((results[i][statSelect]["totalBuff"]).toFixed(0)).toLocaleString();
        percentTotal[i].innerHTML = Number(((results[i][statSelect]["buffPercent"] * 100)).toFixed(2));
    }

    var debuffValue = Number((results["totalGridDebuff"][statSelect]).toFixed(0));

    if (debuffValue < 0) {
        debuffValue *= -1;
    }

    document.getElementById("resultsBuff1").innerHTML =  "Grid Buff: " + Number((results["totalGridBuff"][statSelect]).toFixed(0)).toLocaleString();
    document.getElementById("resultsBuff2").innerHTML =  "Grid Debuff: " + debuffValue.toLocaleString();
}

function copyGrid(weaponGrid, copyNum) {
    document.getElementsByClassName("gridName")[copyNum].value = weaponGrid["gridName"];
    document.getElementsByClassName("patkInput")[copyNum].value = weaponGrid["patk"];
    document.getElementsByClassName("matkInput")[copyNum].value = weaponGrid["matk"];
    document.getElementsByClassName("pdefInput")[copyNum].value = weaponGrid["pdef"];
    document.getElementsByClassName("mdefInput")[copyNum].value = weaponGrid["mdef"];

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
    document.getElementsByClassName("pdefInput")[gridNum].value = '';
    document.getElementsByClassName("mdefInput")[gridNum].value = '';

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value = 0;
        weaponTypeSelect(0, ((gridNum * 20) + i));
        document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponSupSkill")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("supportSkillLevel")[(gridNum * 20) + i].value = '';
        document.getElementsByClassName("weaponName")[(gridNum * 20) + i].value =  '';
    }

    document.getElementsByClassName("job")[gridNum].value = 0;
}

function clearCalcResults() {
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var damage = document.getElementsByClassName("resultBuff");
    var damageSB = document.getElementsByClassName("resultBuffSB");
    var damageAoE = document.getElementsByClassName("resultBuffAoE");
    var buffTotal = document.getElementsByClassName("resultBuffTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        weaponName[i].innerHTML = '';
        damage[i].innerHTML = '';
        damageSB[i].innerHTML = '';
        damageAoE[i].innerHTML = '';
        buffTotal[i].innerHTML = '';
        percentTotal[i].innerHTML = '';
    }
}

function weaponTypeSelect(weaponType, index) {
    var weaponModifier = document.getElementsByClassName("weaponModifier")[index];

    if (weaponType == 1) {
        weaponModifier.innerHTML = '<option value="0">Curse of Disenchantment IV</option><option value="1">Incantation of Disenchantment III</option><option value="2">Incantation of Disenchantment II</option><option value="3">Curse of Debilitation IV</option><option value="4">Incantation of Debilitation III</option><option value="5">Curse of Submission II</option><option value="6">Incantation of Submission I</option><option value="7">Curse of Corrosion III</option><option value="8">Curse of Corrosion I</option><option value="9">Incantation of Corrosion I 0.42 mod</option><option value="10">Incantation of Corrosion I 0.34 mod</option><option value="11">Shackled Chain Magic III</option><option value="12">Curse of Demolition IV</option><option value="13">Curse of Demolition III</option><option value="14">Incantation of Demolition III</option><option value="15">Curse of Rust IV</option><option value="16">Curse of Rust III</option>';
    } else if (weaponType == 2) {
        weaponModifier.innerHTML = "<option value='0'>Sorcerer's Rondo III</option><option value='1'>Sorcerer's Waltz IV</option><option value='2'>Knight's Nocturne III</option><option value='3'>Holy Knight's Hymn III</option><option value='4'>Holy Knight's Gospel II 1.06 mod</option><option value='5'>Holy Knight's Gospel II 1.2 mod</option><option value='6'>Holy Knight's Gospel I</option><option value='7'>Barrier Master's Nocturne III</option><option value='8'>Warrior's Rondo III</option><option value='9'>Warrior's Waltz IV</option><option value='10'>Warrior's Waltz III</option><option value='11'>Hero's Rhapsody III</option><option value='12'>Hero's Rhapsody I</option>";
    } else {
        weaponModifier.innerHTML = '<option value="0">None</option>';
    }
}

function exportGrid(gridNum) {
    var weaponGrid = createGrid(gridNum);
    var filename = document.getElementsByClassName("gridName")[gridNum].value;

    weaponGrid["role"] = "minsorc";

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

    if (weaponGrid["role"] != "minsorc") {
        window.alert("Incompatible import file");
        return false;
    }

    copyGrid(weaponGrid, gridNum);
}

function sbSelect(sbSelectValue) {
    var checkboxes = document.getElementsByClassName("sbCheck");
    var sbSkills = document.getElementsByClassName("weaponSupSkill");

    if (sbSelectValue == 0) {
        for (var i = 0; i < 20; i++) {
            checkboxes[i].checked = false;
            checkboxes[i].disabled = true;
        }
    } else if (sbSelectValue == 1) {
        for (var i = 0; i < 20; i++) {
            if (sbSkills[i].value > 0) {
                checkboxes[i].disabled = false;
            }
        }
    }
}

var debuffSkills ={
    0: {
        patk: 0,
        matk: 0,
        pdef: 0,
        mdef: 1.8,
        targets: 1,
        tier: 4
    },
    1: {
        patk: 0,
        matk: 0,
        pdef: 0,
        mdef: 1.5,
        targets: 1.5,
        tier: 3
    },
    2: {
        patk: 0,
        matk: 0,
        pdef: 0,
        mdef: 1.2,
        targets: 2,
        tier: 2
    },
    3: {
        patk: 0,
        matk: 1.06,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 4
    },
    4: {
        patk: 0,
        matk: 0.9,
        pdef: 0,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    5: {
        patk: 0,
        matk: 0,
        pdef: 1.24,
        mdef: 1.24,
        targets: 1,
        tier: 2
    },
    6: {
        patk: 0,
        matk: 0,
        pdef: 0.58,
        mdef: 0.58,
        targets: 2,
        tier: 1
    },
    7: {
        patk: 0.96,
        matk: 0.96,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 3
    },
    8: {
        patk: 0.54,
        matk: 0.54,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 1
    },
    9: {
        patk: 0.42,
        matk: 0.42,
        pdef: 0,
        mdef: 0,
        targets: 2,
        tier: 1
    },
    10: {
        patk: 0.34,
        matk: 0.34,
        pdef: 0,
        mdef: 0,
        targets: 2,
        tier: 1
    },
    11: {
        patk: 0.84,
        matk: 0,
        pdef: 1.36,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    12: {
        patk: 0,
        matk: 0,
        pdef: 1.8,
        mdef: 0,
        targets: 1,
        tier: 4
    },
    13: {
        patk: 0,
        matk: 0,
        pdef: 1.36,
        mdef: 0,
        targets: 1,
        tier: 3
    },
    14: {
        patk: 0,
        matk: 0,
        pdef: 1.5,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    15: {
        patk: 1.06,
        matk: 0,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 4
    },
    16: {
        patk: 0.76,
        matk: 0,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 3
    }
}

var buffSkills ={
    0: {
        patk: 0,
        matk: 0.9,
        pdef: 0,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    1: {
        patk: 0,
        matk: 1.06,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 4
    },
    2: {
        patk: 0,
        matk: 0,
        pdef: 1.5,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    3: {
        patk: 0,
        matk: 0,
        pdef: 1.66,
        mdef: 1.66,
        targets: 1,
        tier: 3
    },
    4: {
        patk: 0,
        matk: 0,
        pdef: 1.06,
        mdef: 1.06,
        targets: 2,
        tier: 2
    },
    5: {
        patk: 0,
        matk: 0,
        pdef: 1.2,
        mdef: 1.2,
        targets: 2,
        tier: 2
    },
    6: {
        patk: 0,
        matk: 0,
        pdef: 0.72,
        mdef: 0.72,
        targets: 2,
        tier: 1
    },
    7: {
        patk: 0,
        matk: 0,
        pdef: 0,
        mdef: 1.5,
        targets: 1.5,
        tier: 3
    },
    8: {
        patk: 0.9,
        matk: 0,
        pdef: 0,
        mdef: 0,
        targets: 1.5,
        tier: 3
    },
    9: {
        patk: 1.06,
        matk: 0,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 4
    },
    10: {
        patk: 0.6,
        matk: 0,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 3
    },
    11: {
        patk: 0.7,
        matk: 0.7,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 3
    },
    12: {
        patk: 0.54,
        matk: 0.54,
        pdef: 0,
        mdef: 0,
        targets: 1,
        tier: 1
    }
}