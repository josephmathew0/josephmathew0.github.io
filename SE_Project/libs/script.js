var imageArray = ["background.svg", "back_icon.png"];

function questionInteractive() 
{	
	if(typeof getParameters['numberLanguage']=="undefined")  //interactive parameters are defined here
	    this.numberLanguage = 'english'; 
	else this.numberLanguage = getParameters['numberLanguage'];

	if(typeof getParameters['language']=="undefined") 
		this.language = 'english'; 
	else this.language = getParameters['language'];

	this.subjectSelectedValue = null;
	this.subtopicSelectedValue = null;
	this.linkSelectedValue = null;

	this.subjectsAndQuestionContent = {
	"Sandwiches": {
		"icon": "sandwich.png",
		"subtopic": {
			"Non-Vegetarian": {
				"ScriptDocLink":"https://mysubwayinfo.com/subway-bread-choices/",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "blackForestham.jpeg", //BFH
					"QuestionText": "Black Forest Ham",
					"QuestionLink": {"name": "Black Forest Ham ", "valueServingWeightGrams": 219, "valueCalories": 270, "valueTotalFat": 4, "valueSatFat": 1, "valueTransFat": 0, "valueCholesterol": 30, "valueSodium": 810, "valueTotalCarb": 41, "valueFibers": 4.0, "valueSugars": 6, "valueProteins": 18, "valueVitaminA": 30, "valueVitaminC": 15, "valueCalcium": 2, "valueIron": 15, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				},
				"Link2": {
					"QuestionImage": "BuffaloChicken.jpeg", //BuffaloChicken
					"QuestionText": promptArr['BC'],
					"QuestionLink": {"name": "Buffalo Chicken (with Grilled Chicken) ", "valueServingWeightGrams": 248, "valueCalories": 340, "valueTotalFat": 12, "valueSatFat": 3, "valueTransFat": 0, "valueCholesterol": 55, "valueSodium": 1360, "valueTotalCarb": 39, "valueFibers": 2.0, "valueSugars": 4, "valueProteins": 24, "valueVitaminA": 25, "valueVitaminC": 20, "valueCalcium": 2, "valueIron": 15, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				},
				"Link3": {
					"QuestionImage": "ChickenBaconRanchMelt.jpeg", //ChickenBaconRanchMelt
					"QuestionText": promptArr["ChickenNBacon"],
					"QuestionLink": {"name": "Chicken & Bacon Ranch (with Grilled Chicken) ", "valueServingWeightGrams": 256, "valueCalories": 510, "valueTotalFat": 27, "valueSatFat": 10, "valueTransFat": 0, "valueCholesterol": 100, "valueSodium": 1020, "valueTotalCarb": 39, "valueFibers": 2.0, "valueSugars": 5, "valueProteins": 36, "valueVitaminA": 25, "valueVitaminC": 20, "valueCalcium": 20, "valueIron": 15, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				},
				"Link4": {
					"QuestionImage": "ColdCutCombo.jpeg", //ColdCutCombo
					"QuestionText": "Cold Cut Combo",
					"QuestionLink": {"name": "Chicken & Bacon Ranch (with Rotisserie-Style Chicken)", "valueServingWeightGrams": 256, "valueCalories": 530, "valueTotalFat": 29, "valueSatFat": 11, "valueTransFat": 0, "valueCholesterol": 105, "valueSodium": 1200, "valueTotalCarb": 39, "valueFibers": 2.0, "valueSugars": 5, "valueProteins": 34, "valueVitaminA": 25, "valueVitaminC": 15, "valueCalcium": 20, "valueIron": 15, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				},
				"Link5": {
					"QuestionImage": "ITALIAN_BMT.png", //ITALIAN_BMT
					"QuestionText": "ITALIAN B.M.T.",
					"QuestionLink": {"name": "Italian BMT\u00ae ", "valueServingWeightGrams": 213, "valueCalories": 360, "valueTotalFat": 16, "valueSatFat": 6, "valueTransFat": 0, "valueCholesterol": 50, "valueSodium": 1160, "valueTotalCarb": 39, "valueFibers": 2.0, "valueSugars": 4, "valueProteins": 19, "valueVitaminA": 15, "valueVitaminC": 30, "valueCalcium": 4, "valueIron": 15, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				},
				"Link6": {
					"QuestionImage": "MeatballMarinara.jpeg", //MeatballMarinara
					"QuestionText": "Meatball Marinara",
					"QuestionLink": {"name": "Meatball Marinara ", "valueServingWeightGrams": 205, "valueCalories": 400, "valueTotalFat": 17, "valueSatFat": 7, "valueTransFat": 1, "valueCholesterol": 40, "valueSodium": 1080, "valueTotalCarb": 46, "valueFibers": 3.0, "valueSugars": 6, "valueProteins": 20, "valueVitaminA": 10, "valueVitaminC": 15, "valueCalcium": 6, "valueIron": 20, "Category": "SANDWICHES", "Subcategory": "Sandwiches"},
				}

			},

			"Vegetarian": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "74216.png", 
					"QuestionText": "Veg loaded",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "6961.png",
					"QuestionText": "Vegan",
					"QuestionLink": ""
				}
			}
		}	
	},
	"Wraps": {
		"icon": "wraps.png",
		"subtopic": {
			"Reflection in curved surfaces": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "33125.png",
					"QuestionText": "Recalling reflection in plane mirrors",
					"QuestionLink": ""
				},
			}
		}
	},			   
	"Cookies": {
		"icon": "cookies.png",
		"subtopic": {
			"Chocolate": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "33125.png",
					"QuestionText": "Large",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "31789.png",
					"QuestionText": "Identifying a concave surface",
					"QuestionLink": ""
				}
			},
			"Kinetic theory": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "39577.png",
					"QuestionText": "Relating attraction between particles with an everyday example",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "39581.png",
					"QuestionText": "Understanding state change with an known example",
					"QuestionLink": ""
				}
			}
		}
	},
	"Beverages": {
		"icon": "beverage.png",
		"subtopic": {
			"Listening": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "TooBigTooSmall_2420.png",
					"QuestionText": "Audio 1",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "Q_Recall.png",
					"QuestionText": "Audio 1 : Recall Question",
					"QuestionLink": ""
				}
			},
			"Reading": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "UniversalLanguage_2296.png",
					"QuestionText": "Humans may speak a universal language, say scientists",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "Q_Recall.png",
					"QuestionText": "Recall Question",
					"QuestionLink": ""
				}
			},
			"Grammar": {
				"ScriptDocLink":"",	//Link to the doc about the topic

				"Link1": {
					"QuestionImage": "grammar_icon.png",
					"QuestionText": "Verbs: Because Actions Matter",
					"QuestionLink": ""
				},
				"Link2": {
					"QuestionImage": "preposition.png",
					"QuestionText": "Prepositions: All About Making Connections",
					"QuestionLink": ""
				}
			}
		}
	},
	
	};	
}

questionInteractive.prototype.init = function() 
{
	interactiveObj.createSecondScreen();
}

questionInteractive.prototype.createFirstScreen = function()
{

}

questionInteractive.prototype.createSecondScreen = function()
{
	var htmlContent = '';
	var i = 0;

	htmlContent += '<div id="subjectDiv">';
	htmlContent += '<div id="Ei_logo"></div>';
	htmlContent += '<div id="subjectDivHeading">Take a break, eat!</div>';
	htmlContent += '<div id="subjectDivHeadingMargin"></div>';
	htmlContent += '<div id="subjectDivBody">';

	for(i=0; i<Object.keys(this.subjectsAndQuestionContent).length; i++)
	{
		htmlContent += '<div id="'+Object.keys(this.subjectsAndQuestionContent)[i]+'" class="subjectOptionDivs" onclick="interactiveObj.subjectSelected(\''+Object.keys(this.subjectsAndQuestionContent)[i]+'\')"><img src="../assets/'+this.subjectsAndQuestionContent[Object.keys(this.subjectsAndQuestionContent)[i]]["icon"]+'" alt="'+Object.keys(this.subjectsAndQuestionContent)[i]+'" class="subject_icon_images">'+Object.keys(this.subjectsAndQuestionContent)[i]+'</div>';
	}
	htmlContent += '</div>';

	htmlContent += '<div id="teacherFeatureParentDiv">';

	htmlContent += '</div>';

	htmlContent += '<div id="subtopicParentDiv"></div>';
	htmlContent += '<div id="backButton" onclick="interactiveObj.goBackToSubjectSelectPage()"></div>';
	htmlContent += '</div>';

	htmlContent += '<div id="subtopicQuestionsParentDiv" class="subtopicQuestionPage"></div>';

	$("#mainDiv").append(htmlContent);

	/// Contents for next page. Added here because elements are hetting added to subjectDiv and adding here avoids redundancy as other screens are created through functions and functions can be called multiple times.
	htmlContent = '';
	htmlContent += '<div id="pointToSubtopicArrow">></div>';	//Appears after a subtopic is selected
	htmlContent += '<div id="ScriptDocLink" class="ScriptDocLinkIcon"></div>';	//Appears after a subtopic is selected
	$("#subjectDiv").append(htmlContent);
	///////////////////////////////////////////////////////////////////////////
}

questionInteractive.prototype.subjectSelected = function(pSubjectId)
{
	var htmlContent = '';
	var i = 0;
	var subTopicName = Object.keys(this.subjectsAndQuestionContent[pSubjectId]["subtopic"])[0];

	if (window.innerWidth < 933) {	//hide other subject options when a subject is selected
    	$(".subjectOptionDivs").css({"display":"none"});
  	}
  	else
  	{
  		$("#subjectDivHeadingMargin").animate({"opacity":0});
  	}
  	// interactiveObj.matchMediaQuery(this.screenWidth);

  	$("#teacherFeatureParentDiv").css({"display":"none"});
  	$("#backButton").css({"pointer-events":"auto", "visibility":"visible"});
	$(".subjectOptionDivs").css({"background":"white", "color":"black", "pointer-events":"auto"});
	$("#"+pSubjectId).css({"background":"#9f1d21", "color":"white", "pointer-events":"none", "display":"flex"});
	$(".subject_icon_images").css({"transform":"scale(0.5)", "margin-bottom":"-22px"});
	$("#subjectDivHeading").css({"visibility":"hidden"});
	$("#subtopicParentDiv").css({"display":"flex"});

	//////////////////////    Animations //////////////////////////////////////////////////
	$("#subjectDivBody").animate({	////////////  Move subjects up
		top:"-5vh",
	});

	$(".subjectOptionDivs").animate({	////////////  Move subjects up
		height:"15vh",
	});

	$("#subjectDivHeadingMargin").animate({ 	/////////// Bring down red line
		top:"18vh",
	});
	///////////////////////////////////////////////////////////////////////////////////////////

	for(i=0; i<Object.keys(this.subjectsAndQuestionContent[pSubjectId]["subtopic"]).length; i++)	// create subtopics
	{
		subTopicName = Object.keys(this.subjectsAndQuestionContent[pSubjectId]["subtopic"])[i];
		subTopicName = subTopicName.replaceAll(" ","_");	//Replace space with "_" to avoid issue while creating IDs. Change to ID
		htmlContent += '<div id="'+(subTopicName)+'" class="subtopicDivs" onclick="interactiveObj.subtopicSelected(\''+(subTopicName)+'\''+',\''+pSubjectId+'\''+','+i+')">'+(Object.keys(this.subjectsAndQuestionContent[pSubjectId]["subtopic"])[i])+'</div>';
	}
	$("#subtopicParentDiv").html(htmlContent);
}


questionInteractive.prototype.subtopicSelected = function(pSubtopicId, pSubjectId, pId)
{
	var htmlContent = '';
	var i = 0;

	if (window.innerWidth < 933) {
    	$(".subjectOptionDivs").css({"opacity":0});
  	}

  	$(".subjectOptionDivs").css({"pointer-events":"none"});

	$("#backButton").attr("onclick","interactiveObj.goBackToSubtopicSelectPage()");

	$("#ScriptDocLink").attr("onclick","interactiveObj.openNotes("+"\'"+pSubjectId+"\',\'"+pSubtopicId+"\')");	
	$("#ScriptDocLink").css({"display":"block"});	//Appears only after a subtopic is selected

	$(".subjectOptionDivs").css({"position":"absolute"});
	$(".subjectOptionDivs").animate({"left":"3vh","top":"3vh"});
	$("#"+pSubjectId).css({"z-index":1});

	$(".subtopicDivs").css({"position":"absolute", "visibility":"hidden"});
	$(".subtopicDivs").animate({"top":"1vh"});
	$("#"+pSubtopicId).css({"z-index":1, "visibility":"visible"});
	
	$("#pointToSubtopicArrow").animate({"opacity":1}, 1000);

	$("#subtopicQuestionsParentDiv").css({"display":"flex"});


	pSubtopicId = pSubtopicId.replaceAll("_"," ");	//revert to the name given in subjectsAndQuestionContent variable. Change to ID
	htmlContent = '';
	for(i=0; i<Object.keys(this.subjectsAndQuestionContent[pSubjectId]["subtopic"][pSubtopicId]).length-1; i++)
	{
		htmlContent += '<div id="QuestionLink_'+pSubjectId+'_'+pSubtopicId+'_Link'+(i+1)+'" onclick="interactiveObj.openQuestionInIframe(\''+pSubjectId+'\',\''+pSubtopicId+'\',\''+i+'\')" class="questionLinks">';
			htmlContent += '<div class="LinkImageDiv"> <img id="icon_'+pSubjectId+'_'+pSubtopicId+'_Link'+(i+1)+'" class="QuestionLinkImages" src="../assets/'+this.subjectsAndQuestionContent[pSubjectId]["subtopic"][pSubtopicId]["Link"+(i+1)]["QuestionImage"]+'"></div>'; 
			htmlContent += '<div id="Link_'+pSubjectId+'_'+pSubtopicId+'_'+(i+1)+'_NumberAndText" class="LinkNumberAndText">';
				htmlContent += '<div id="LinkNumber_'+(i+1)+'" class="LinkNumbers">'+(i+1)+'</div>';
				htmlContent += '<div id="LinkText_'+(i+1)+'" class="LinkTexts">'+this.subjectsAndQuestionContent[pSubjectId]["subtopic"][pSubtopicId]["Link"+(i+1)]["QuestionText"]+'</div>';
			htmlContent += '</div>';
		htmlContent += '</div>';
	}
 
	$("#subtopicQuestionsParentDiv").html(htmlContent);
}


questionInteractive.prototype.openNotes = function(pSubjectId, pSubtopicId)
{
	let url = this.subjectsAndQuestionContent[pSubjectId]["subtopic"][pSubtopicId]["ScriptDocLink"];
	window.open(url, '_blank').focus();
}

questionInteractive.prototype.openQuestionInIframe = function(pSubjectId, pSubtopicId, pId) 
{	
	this.subjectSelectedValue = pSubjectId;
	this.subtopicSelectedValue = pSubtopicId;
	this.linkSelectedValue = pId;

	localStorage.setItem('subjectSelectedValue',pSubjectId);
	localStorage.setItem('subtopicSelectedValue',pSubtopicId);
	localStorage.setItem('linkSelectedValue',pId);

	let url = "./index_iframe.html";
	window.open(url, '_blank').focus();
}

questionInteractive.prototype.goBackToSubjectSelectPage = function()
{
	$(".subjectOptionDivs").css({"position":"relative"});
	$(".subtopicDivs").css({"position":"relative"});

	$("#teacherFeatureParentDiv").css({"display":"flex"});
	$("#backButton").css({"pointer-events":"none", "visibility":"hidden"});
	$(".subjectOptionDivs").css({"background":"white", "color":"black", "pointer-events":"auto", "display":"flex"});
	$(".subject_icon_images").css({"transform":"scale(1)", "margin-bottom":"37px"});
	$("#subjectDivHeading").css({"visibility":"visible"});
	$("#subtopicParentDiv").css({"display":"none", "top":"0px"});

	//////////////////////    Animations //////////////////////////////////////////////////
	$("#subjectDivBody").animate({	////////////  Move subjects up
		top:"0vh",
	});

	$(".subjectOptionDivs").animate({	////////////  Move subjects up
		top:"0vh",
		height:"35vh"
	});

	$("#subjectDivHeadingMargin").animate({ 	/////////// Bring down red line
		top:"0vh",
		opacity:1,
	});
	///////////////////////////////////////////////////////////////////////////////////////////
}	


questionInteractive.prototype.goBackToSubtopicSelectPage = function()
{
	$("#ScriptDocLink").css({"display":"none"});	//Property of each subtopic selected page only.
	$(".subjectOptionDivs").css({"pointer-events":"auto"});
	$("#backButton").attr("onclick","interactiveObj.goBackToSubjectSelectPage()");
	$("#pointToSubtopicArrow").css({"opacity":"0"});

	$(".subjectOptionDivs").css({"position":"relative","z-index":0, "opacity":1});
	$(".subjectOptionDivs").animate({"left":"0vh","top":"0vh"});

	$(".subtopicDivs").css({"position":"relative","z-index":0, "visibility":"visible"});
	$(".subtopicDivs").animate({"top":"0vh"});

	$("#subtopicQuestionsParentDiv").css({"display":"none"});
}


questionInteractive.prototype.matchMediaQuery = function(x) {
  if (x.matches) { // If media query matches
    $(".subjectOptionDivs").css({"display":"none"});
  } else {
    // $(".subjectOptionDivs").css({"display":"none"});
  }
}

