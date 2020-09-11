window.onload = function() {
    var height = 0;
    var trHeight = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("atkValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";

    /*
    trHeight += document.getElementsByTagName("tr")[1].clientHeight;

    for (var i = 23; i < 43; i++) {
        document.getElementsByTagName("tr")[i].style.height = "" + trHeight + "px";
    }
    */
}

window.onresize = function() {
    var height = 0;
    var trHeight = 0;

    height += document.getElementsByClassName("tableHeading")[0].clientHeight;
    height += document.getElementsByClassName("atkValue")[0].clientHeight;
    height += 40;

    document.getElementById("resultsPadding").style.height = "" + height + "px";

    /*
    trHeight += document.getElementsByTagName("tr")[1].clientHeight;

    for (var i = 23; i < 43; i++) {
        document.getElementsByTagName("tr")[i].style.height = "" + trHeight + "px";
    }
    */
}

document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}

document.getElementById("helpLink").onclick = function() {
    document.getElementById("modal").style.display = "block";

    return false;
}

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
    clearGrid(2);

    return false;
}

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

function createGrid(gridNumber) {
    var weaponGrid = [];
    
    weaponGrid[0] = document.getElementsByClassName("patkInput")[gridNumber].value;
    weaponGrid[1] = document.getElementsByClassName("matkInput")[gridNumber].value;

    for (var i = 0; i < 20; i++) {
        var weapon = [];

        weapon[0] = document.getElementsByClassName("weaponType")[(gridNumber * 20) + i].value;
        weapon[1] = document.getElementsByClassName("weaponModifier")[(gridNumber * 20) + i].value;
        weapon[2] = document.getElementsByClassName("weaponSkillLevel")[(gridNumber * 20) + i].value;
        weapon[3] = document.getElementsByClassName("weaponSupSkill")[(gridNumber * 20) + i].value;
        weapon[4] = document.getElementsByClassName("supportSkillLevel")[(gridNumber * 20) + i].value;
        weapon[5] = document.getElementsByClassName("weaponName")[(gridNumber * 20) + i].value;

        weaponGrid[i + 2] = weapon;
    }

    weaponGrid[22] = document.getElementsByClassName("job")[gridNumber].value;
    weaponGrid[23] = document.getElementsByClassName("gridName")[gridNumber].value;

    return weaponGrid;
}

function compareGrids() {
    var weaponGrids = [];
    var results = [];

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    results = calculateMods(weaponGrids, 2);
    displayResults(results);
}

function calculateGrid() {
    var weaponGrids = [];
    var results = [];

    weaponGrids[0] = createGrid(0);

    results = calculateMods(weaponGrids, 1);
    processSingleGridResults(results);
}

function calculateMods(weaponGrids, numGrids) {
    var results = [];

    for (var i = 0; i < numGrids; i++) {
        var weaponGrid = weaponGrids[i];
        var dcMod = 1;
        var damageMods = [];

        for (var k = 2; k < 22; k++) {
            var skillLevelMod;
            var procRate;
            var instancedcMod;

            if (weaponGrid[k][3] > 0) {
                if (weaponGrid[k][4] == 20) {
                    skillLevelMod = 1 + (20 * 0.025);
                } else {
                    skillLevelMod = 1 + ((weaponGrid[k][4] - 1) * 0.025);
                }

                procRate = 0.04 + ((weaponGrid[k][4] - 1) * 0.005);

                if (weaponGrid[k][4] > 14) {
                    procRate += 0.005;
                }

                if (weaponGrid[k][4] == 20) {
                    procRate += 0.005;
                }

                instancedcMod = ((((weaponGrid[k][3] * 5) + 5) / 100) * skillLevelMod * procRate)
            } else {
                instancedcMod = 0;
            }

            dcMod += instancedcMod;
        }

        for (var j = 2; j < 22; j++) {
            var weapon = weaponGrid[j];
            var weaponType = weapon[0];
            var skillMod = weapon[1];
            var skillLevel = weapon[2];
            var skillLevelMod;
            var jobMod;
            var totalMods;
            var weaponMod = [];

            weaponMod[0] = weaponType;

            if (weaponType > 0) {
                if (weaponType == 1) {
                    if (weaponGrid[22] == 0) {
                        jobMod = 1.1;
                    } else if (weaponGrid[22] == 4) {
                        jobMod = 1.35;
                    } else if (weaponGrid[22] == 5 || weaponGrid[22] == 6) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else if (weaponType == 2) {
                    if (weaponGrid[22] == 1) {
                        jobMod = 1.1;
                    } else if (weaponGrid[22] == 5) {
                        jobMod = 1.35;
                    } else if (weaponGrid[22] == 4 || weaponGrid[22] == 7) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else if (weaponType == 3) {
                    if (weaponGrid[22] == 2) {
                        jobMod = 1.1;
                    } else if (weaponGrid[22] == 6) {
                        jobMod = 1.35;
                    } else if (weaponGrid[22] == 4 || weaponGrid[22] == 7) {
                        jobMod = 0.25;
                    } else {
                        jobMod = 1;
                    }
                } else {
                    if (weaponGrid[22] == 3) {
                        jobMod = 1.1;
                    } else if (weaponGrid[22] == 7) {
                        jobMod = 1.35;
                    } else if (weaponGrid[22] == 5 || weaponGrid[22] == 6) {
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
                
                weaponMod[1] = totalMods;
            } else {
                weaponMod[1] = 0;
            }

            damageMods[j - 2] = weaponMod;
        }

        damageMods[20] = dcMod;

        results[i] = damageMods;
    }

    return results;
}

function displayResults(results) {
   var resultsTextString;

    createResultsRegion(2);
    resultsTextString = calculateResults(results);

    document.getElementById("resultsDamage").innerHTML = resultsTextString[0]
    document.getElementById("resultsText").innerHTML = resultsTextString[1];
}

function processSingleGridResults(mods) {
    var results = [];
 
     createResultsRegion(1);
     results = calculateSingleGridResults(mods);
     displaySingleGridResults(results);
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
            sliderInputCalculateChange();
        }

        mdefSlider.oninput = function() {
            mdefText.value = mdefSlider.value;
        }

        mdefSlider.onchange = function() {
            sliderInputCalculateChange();
        }

        comboSlider.oninput = function() {
            comboText.value = comboSlider.value;
        }

        comboSlider.onchange = function() {
            sliderInputCalculateChange();
        }

        pdefText.onchange = function() {
            sliderInputCalculateChange();
            pdefSlider.value = pdefText.value;
        }

        mdefText.onchange = function() {
            sliderInputCalculateChange();
            mdefSlider.value = mdefText.value;
        }

        comboText.onchange = function() {
            sliderInputCalculateChange();
            comboSlider.value = comboText.value;
        }
    } else {
        pdefSlider.oninput = function() {
            pdefText.value = pdefSlider.value;
        }

        pdefSlider.onchange = function() {
            sliderInputCompareChange();
        }

        mdefSlider.oninput = function() {
            mdefText.value = mdefSlider.value;
        }

        mdefSlider.onchange = function() {
            sliderInputCompareChange();
        }

        comboSlider.oninput = function() {
            comboText.value = comboSlider.value;
        }

        comboSlider.onchange = function() {
            sliderInputCompareChange();
        }

        pdefText.onchange = function() {
            sliderInputCompareChange();
            pdefSlider.value = pdefText.value;
        }

        mdefText.onchange = function() {
            sliderInputCompareChange();
            mdefSlider.value = mdefText.value;
        }

        comboText.onchange = function() {
            sliderInputCompareChange();
            comboSlider.value = comboText.value;
        }
    }
}

function sliderInputCompareChange() {
    var weaponGrids = [];
    var results = [];
    var resultsTextString;

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    results = calculateMods(weaponGrids, 2);
    resultsTextString = calculateResults(results);

    document.getElementById("resultsDamage").innerHTML = resultsTextString[0]
    document.getElementById("resultsText").innerHTML = resultsTextString[1];
}

function sliderInputCalculateChange() {
    var weaponGrids = [];
    var mods = [];
    var results = [];

    weaponGrids[0] = createGrid(0);

    mods = calculateMods(weaponGrids, 1);
    results = calculateSingleGridResults(mods);
    displaySingleGridResults(results);
}

function calculateResults(results) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefSlider = document.getElementById("pdefSlider");
    var mdefSlider = document.getElementById("mdefSlider"); 
    var pdef = pdefSlider.value;
    var mdef = mdefSlider.value; 
    var total = [];
    var strengthRatio;
    var resultsText = [];
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
        var weaponMods = results[i];
        var damageTotal = 0;
        var patk = patkValues[i].value;
        var matk = matkValues[i].value;

        for (var j = 0; j < 20; j++) {
            if (weaponMods[j][0] == 1 || weaponMods[j][0] == 2) {
                if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                    damageTotal += 1 / 0.05 / 0.95;
                } else {
                    damageTotal += ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j][1];
                }
            } else if (weaponMods[j][0] == 3 || weaponMods[j][0] == 4) {
                if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                    damageTotal += 1 / 0.05 / 0.95;
                } else {
                    damageTotal += ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j][1];
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
            resultsText[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)) + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0));
            resultsText[1] = "Grid 1 damage is " + Number((strengthRatio).toFixed(2)) + "% of Grid 2";
        } else {
            resultsText[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)) + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0));
            resultsText[1] = "Grid 2 will only do 1 damage past this point";
        }
    } else if (total[1] > total[0]) {
        if (total[0] > 0) {
            strengthRatio = ((total[1] / total[0]) * 100);
            resultsText[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)) + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0));
            resultsText[1] = "Grid 2 damage is " + Number((strengthRatio).toFixed(2)) + "% of Grid 1";
        } else {
            resultsText[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)) + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0));
            resultsText[1] = "Grid 1 will only do 1 damage past this point";
        }
    } else {
        resultsText[0] = "Grid 1 Damage: " + Number((total[0]).toFixed(0)) + "<br>Grid 2 Damage: " + Number((total[1]).toFixed(0));
        resultsText[1] = "The grids are equal in strength";
    }

    return resultsText;
}

function calculateSingleGridResults(results) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdefSlider = document.getElementById("pdefSlider");
    var mdefSlider = document.getElementById("mdefSlider"); 
    var pdef = pdefSlider.value;
    var mdef = mdefSlider.value; 
    var totalResults = [];
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

    var weaponMods = results[0];
    var damageTotal = 0;
    var patk = patkValues[0].value;
    var matk = matkValues[0].value;

    for (var j = 0; j < 20; j++) {
        var weaponResults = [];

        if (weaponMods[j][0] == 1) {
            if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                weaponResults[0] = 1 / 0.05 / 0.95;
                weaponResults[1] = weaponResults[0];
            } else {
                weaponResults[0] = ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j][1] / weaponMods[20];
                weaponResults[1] = weaponResults[0] * weaponMods[20];
            }
            weaponResults[2] = weaponResults[0];
            weaponResults[3] = weaponResults[1];
            damageTotal += weaponResults[3];
        } else if (weaponMods[j][0] == 2) {
            if (((patk * comboMod) - ((2 / 3) * pdef)) < (1 / 0.05 / 0.95)) {
                weaponResults[0] = 1 / 0.05 / 0.95;
                weaponResults[1] = weaponResults[0];
                weaponResults[2] = weaponResults[0];
                weaponResults[3] = weaponResults[0];
            } else {
                weaponResults[0] = ((patk * comboMod) - ((2 / 3) * pdef)) * weaponMods[j][1] / weaponMods[20] / 1.5;
                weaponResults[1] = weaponResults[0] * weaponMods[20];
                weaponResults[2] = weaponResults[0] * 1.5;
                weaponResults[3] = weaponResults[1] * 1.5;
            }
            damageTotal += weaponResults[3];
        } else if (weaponMods[j][0] == 3) {
            if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                weaponResults[0] = 1 / 0.05 / 0.95;
                weaponResults[1] = weaponResults[0];
            } else {
                weaponResults[0] = ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j][1] / weaponMods[20] / 1.5;
                weaponResults[1] = weaponResults[0] * weaponMods[20];
            }
            weaponResults[2] = weaponResults[0];
            weaponResults[3] = weaponResults[1];
            damageTotal += weaponResults[3];
        } else if (weaponMods[j][0] == 4) {
            if (((matk * comboMod) - ((2 / 3) * mdef)) < (1 / 0.05 / 0.95)) {
                weaponResults[0] = 1 / 0.05 / 0.95;
                weaponResults[1] = weaponResults[0];
                weaponResults[2] = weaponResults[0];
                weaponResults[3] = weaponResults[0];
            } else {
                weaponResults[0] = ((matk * comboMod) - ((2 / 3) * mdef)) * weaponMods[j][1] / weaponMods[20] / 1.5;
                weaponResults[1] = weaponResults[0] * weaponMods[20];
                weaponResults[2] = weaponResults[0] * 1.5;
                weaponResults[3] = weaponResults[1] * 1.5;
            }
            damageTotal += weaponResults[3];
        } else {
            weaponResults[0] = 0;
            weaponResults[1] = 0;
            weaponResults[2] = 0;
            weaponResults[3] = 0;
            damageTotal += 0;
        }

        weaponResults[5] = weaponMods[j][0];
        totalResults[j] = weaponResults;
    }

    for (var i = 0; i < 20; i++) {
        if (damageTotal != 0) {
            totalResults[i][4] = totalResults[i][3] / damageTotal;
        } else {
            totalResults[i][4] = 0;
        }

        for (var k = 0; k < 5; k++) {
            if (k != 4) {
                totalResults[i][k] *= (0.05 * 0.95);
            }
        }
    }

    totalResults[20] = damageTotal * 0.05 * 0.95;

    return totalResults;
}

function displaySingleGridResults(results) {
    var gridWeaponName = document.getElementsByClassName("weaponName");
    var weaponName = document.getElementsByClassName("resultWeaponName");
    var damage = document.getElementsByClassName("resultDamage");
    var damageDC = document.getElementsByClassName("resultDamageDC");
    var damageAoE = document.getElementsByClassName("resultDamageAoE");
    var damageTotal = document.getElementsByClassName("resultDamageTotal");
    var percentTotal = document.getElementsByClassName("resultPercentTotal");

    for (var i = 0; i < 20; i++) {
        if (results[i][5] == 0) {
            weaponName[i].innerHTML = "None";
        } else if (gridWeaponName[i].value == "") {
            weaponName[i].innerHTML = "Weapon " + (i + 1);
        } else {
            weaponName[i].innerHTML = gridWeaponName[i].value;
        }

        damage[i].innerHTML = Number((results[i][0]).toFixed(0));
        damageDC[i].innerHTML = Number((results[i][1]).toFixed(0));
        damageAoE[i].innerHTML = Number((results[i][2]).toFixed(0));
        damageTotal[i].innerHTML = Number((results[i][3]).toFixed(0));
        percentTotal[i].innerHTML = Number(((results[i][4] * 100)).toFixed(2));
    }

    document.getElementById("resultsDamage").innerHTML =  "Grid Damage: " + Number((results[20]).toFixed(0));
}

function copyGrid(weaponGrid, copyNum) {
    
    document.getElementsByClassName("patkInput")[copyNum].value = weaponGrid[0];
    document.getElementsByClassName("matkInput")[copyNum].value = weaponGrid[1];

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value = weaponGrid[i + 2][0];
        weaponTypeSelect(document.getElementsByClassName("weaponType")[(copyNum * 20) + i].value, ((copyNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(copyNum * 20) + i].value = weaponGrid[i + 2][1];
        document.getElementsByClassName("weaponSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i + 2][2];
        document.getElementsByClassName("weaponSupSkill")[(copyNum * 20) + i].value = weaponGrid[i + 2][3];
        document.getElementsByClassName("supportSkillLevel")[(copyNum * 20) + i].value = weaponGrid[i + 2][4];
        document.getElementsByClassName("weaponName")[(copyNum * 20) + i].value = weaponGrid[i + 2][5];
    }

    document.getElementsByClassName("job")[copyNum].value = weaponGrid[22];
    document.getElementsByClassName("gridName")[copyNum].value = weaponGrid[23];
}

function clearGrid(num) {
    var gridNum = num - 1;
    
    document.getElementsByClassName("patkInput")[gridNum].value = '';
    document.getElementsByClassName("matkInput")[gridNum].value = '';

    for (var i = 0; i < 20; i++) {
        document.getElementsByClassName("weaponType")[(gridNum * 20) + i].value = 0;
        weaponTypeSelect(0, ((gridNum * 20) + i));
        document.getElementsByClassName("weaponModifier")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("weaponSkillLevel")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("weaponSupSkill")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("supportSkillLevel")[(gridNum * 20) + i].value = 0;
        document.getElementsByClassName("weaponName")[(gridNum * 20) + i].value =  0;
    }

    document.getElementsByClassName("job")[gridNum].value = 0;
    document.getElementsByClassName("gridName")[gridNum].value = '';
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

    copyGrid(weaponGrid, gridNum);
}