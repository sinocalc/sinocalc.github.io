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
}

document.getElementById("submitBtn").onclick = function() {
    if (checkInputs()) {
        calculateGrids();
    } else {
        window.alert("Please check your inputs.");
    }

    return false;
};

document.getElementById("copytoBtn").onclick = function() {
    var weaponGrid = createGrid(0);

    copyGrid(weaponGrid, 1);

    return false;
};

document.getElementById("copyfromBtn").onclick = function() {
    var weaponGrid = createGrid(1);

    copyGrid(weaponGrid, 0);

    return false;
};

document.getElementById("exportBtn").onclick = function() {
    exportGrids();

    return false;
};

document.getElementById('importBtn').onclick = function() {
	document.getElementById('selectFiles').click();

    return false;
};

document.getElementById('selectFiles').onchange = function() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }
    
    var fr = new FileReader();
    
    fr.onload = function(e) { 
        console.log(e);
        var result = JSON.parse(e.target.result);
        importJsonFile(result);
    }
    
    fr.readAsText(files.item(0));

    return false;
}

for (let i = 0; i < 40; i++) {
    document.getElementsByClassName("weaponType")[i].onchange = function() {
        weaponTypeSelect(document.getElementsByClassName("weaponType")[i].value, i);
    };
}

function checkInputs() {
    var patk = document.getElementsByClassName("patkInput");
    var matk = document.getElementsByClassName("matkInput");
    var weaponType = document.getElementsByClassName("weaponType");
    var weaponModifier = document.getElementsByClassName("weaponModifier");
    var weaponSkillLevel = document.getElementsByClassName("weaponSkillLevel");
    var weaponSupSkill = document.getElementsByClassName("weaponSupSkill");
    var supportSkillLevel = document.getElementsByClassName("supportSkillLevel");

    for (var i = 0; i < 2; i++) {
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

    return weaponGrid;
}

function calculateGrids() {
    var weaponGrids = [];
    var results = [];

    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    results = calculateMods(weaponGrids);
    displayResults(results);
}

function calculateMods(weaponGrids) {
    var results = [];

    for (var i = 0; i < 2; i++) {
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

        results[i] = damageMods;
    }

    return results;
}

function displayResults(results) {
   var resultsText;

   createResultsRegion();
   resultsText = calculateResults(results);

   document.getElementById("resultsText").innerHTML = resultsText;
}

function createResultsRegion() {
    var pdefSlider = document.createElement("input");
    var mdefSlider = document.createElement("input");
    var patk = document.getElementsByClassName("patkInput");
    var matk = document.getElementsByClassName("matkInput");
    var resultsDiv = document.getElementById("resultsDiv");
    var sliderpatkDiv = document.createElement("div");
    var slidermatkDiv = document.createElement("div");
    var defValue1Div = document.createElement("div");
    var defValue2Div = document.createElement("div");
    var resultsTextDiv = document.createElement("div");
    var resultsText = document.createElement("p");
    
    pdefSlider.id = "pdefSlider";
    pdefSlider.classList.add("slider");
    pdefSlider.type = "range";
    pdefSlider.min = 0;
    pdefSlider.max = (patk[0].value > patk[1].value) ? (3 / 2) * patk[1].value : (3 / 2) * patk[0].value;
    pdefSlider.value = (pdefSlider.min + pdefSlider.max) / 2;
    mdefSlider.id = "mdefSlider";
    mdefSlider.classList.add("slider");
    mdefSlider.type = "range";
    mdefSlider.min = 0;
    mdefSlider.max = (matk[0].value > matk[1].value) ? (3 / 2) * matk[1].value : (3 / 2) * matk[0].value;
    mdefSlider.value = (mdefSlider.min + mdefSlider.max) / 2;

    sliderpatkDiv.id = "sliderpatkDiv";
    sliderpatkDiv.classList.add("sliderDiv");
    slidermatkDiv.id = "slidermatkDiv";
    slidermatkDiv.classList.add("sliderDiv");
    defValue1Div.classList.add("defValueDiv");
    defValue1Div.id = "defValue1Div";
    defValue2Div.classList.add("defValueDiv");
    defValue2Div.id = "defValue2Div";
    resultsTextDiv.id = "resultsTextDiv";
    resultsText.id = "resultsText";

    defValue1Div.innerHTML = pdefSlider.value + " P.Def";
    defValue2Div.innerHTML = mdefSlider.value + " M.Def";

    resultsDiv.innerHTML = "";

    sliderpatkDiv.appendChild(pdefSlider);
    sliderpatkDiv.appendChild(defValue1Div);
    slidermatkDiv.appendChild(mdefSlider);
    slidermatkDiv.appendChild(defValue2Div);
    resultsTextDiv.appendChild(resultsText);
    resultsDiv.appendChild(sliderpatkDiv);
    resultsDiv.appendChild(slidermatkDiv);
    resultsDiv.appendChild(resultsTextDiv);

    pdefSlider.oninput = function() {
        var weaponGrids = [];
        var results = [];
        var resultsTextString;

        weaponGrids[0] = createGrid(0);
        weaponGrids[1] = createGrid(1);

        results = calculateMods(weaponGrids);
        resultsTextString = calculateResults(results);

        document.getElementById("resultsText").innerHTML = resultsTextString;
        document.getElementById("defValue1Div").innerHTML = this.value + " P.Def";
    }

    mdefSlider.oninput = function() {
        var weaponGrids = [];
        var results = [];
        var resultsTextString;

        weaponGrids[0] = createGrid(0);
        weaponGrids[1] = createGrid(1);

        results = calculateMods(weaponGrids);
        resultsTextString = calculateResults(results);

        document.getElementById("resultsText").innerHTML = resultsTextString;
        document.getElementById("defValue2Div").innerHTML = this.value + " M.Def";
    }
}

function calculateResults(results) {
    var patkValues = document.getElementsByClassName("patkInput");
    var matkValues = document.getElementsByClassName("matkInput");
    var pdef = document.getElementById("pdefSlider").value;
    var mdef = document.getElementById("mdefSlider").value; 
    var total = [];
    var strengthRatio;
    var resultsText;

    for (var i = 0; i < 2; i++) {
        var weaponMods = results[i];
        var damageTotal = 0;
        var patk = patkValues[i].value;
        var matk = matkValues[i].value;

        for (var j = 0; j < 20; j++) {
            if (weaponMods[j][0] == 1 || weaponMods[j][0] == 2) {
                damageTotal += (patk - ((2 / 3) * pdef)) * weaponMods[j][1];
            } else if (weaponMods[j][0] == 3 || weaponMods[j][0] == 4) {
                damageTotal += (matk - ((2 / 3) * mdef)) * weaponMods[j][1];
            } else {
                damageTotal += 0;
            }
        }

        total[i] = damageTotal;
    }

    if (total[0] > total[1]) {
        if (total[1] > 0) {
            strengthRatio = ((total[0] / total[1]) * 100);
            resultsText = "Grid 1 damage is " + Number((strengthRatio).toFixed(2)).toString() + "% of Grid 2";
        } else {
            resultsText = "Grid 2 will only do 1 damage past this point";
        }
    } else if (total[1] > total[0]) {
        if (total[0] > 0) {
            strengthRatio = ((total[1] / total[0]) * 100);
            resultsText = "Grid 2 damage is " + Number((strengthRatio).toFixed(2)).toString() + "% of Grid 1";
        } else {
            resultsText = "Grid 1 will only do 1 damage past this point";
        }
    } else {
        resultsText = "The grids are equal in strength";
    }

    return resultsText;
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

function exportGrids() {
    var weaponGrids = [];
    weaponGrids[0] = createGrid(0);
    weaponGrids[1] = createGrid(1);

    exportToJsonFile(weaponGrids);
}

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'weapongrids.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importJsonFile(jsonData) {
    var weaponGrid1 = jsonData[0];
    var weaponGrid2 = jsonData[1];

    copyGrid(weaponGrid1, 0);
    copyGrid(weaponGrid2, 1);
}