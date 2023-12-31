var interactiveObjTest = null;

function questionInteractive_iframe() 
{	
	if(typeof getParameters['numberLanguage']=="undefined")  //interactive parameters are defined here
	    this.numberLanguage = 'english'; 
	else this.numberLanguage = getParameters['numberLanguage'];

	if(typeof getParameters['language']=="undefined") 
		this.language = 'english'; 
	else this.language = getParameters['language'];

	if(typeof getParameters['link']=="undefined") 
		this.link = 'english'; 
	else this.link = getParameters['link'];

	this.subject = '';
	this.subtopic = '';
	this.indexOfQuestion = 1;

	this.linkElementMarginLeft = 0;
	this.totalNumberOfQuestionsInSubtopic = 1;
}

questionInteractive_iframe.prototype.init = function() 
{
	interactiveObjTest = new questionInteractive();

	this.subject = localStorage.getItem('subjectSelectedValue');
	this.subtopic = localStorage.getItem('subtopicSelectedValue');
	this.indexOfQuestion = parseInt(localStorage.getItem('linkSelectedValue')) + 1; // +1 for starting with 1(Link indexOfQuestion) instead of 0(Array indexOfQuestion)	
	this.totalNumberOfQuestionsInSubtopic = parseInt(Object.keys(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]).length);


	console.log("Subject ",this.subject);
	console.log("subTopic ",this.subtopic);
	console.log("indexOF ",this.indexOfQuestion);
	console.log("totalNumberOfQuestionsInSubtopic ",this.totalNumberOfQuestionsInSubtopic);
	console.log("val: ", interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["name"]);

	interactiveObj1.createIframe();
}

questionInteractive_iframe.prototype.createIframe = function()
{
	var htmlContent = '';
	var i = 0;
	var limit = this.totalNumberOfQuestionsInSubtopic; 

	var AmountPerServing = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueServingWeightGrams"]);
	var valueCalories = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueCalories"]);
	this.newCalorie = valueCalories;
	var valueTotalFat =parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueTotalFat"]);
	this.newFat = valueTotalFat;
	var valueSatFat = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueSatFat"]);
	var valueTransFat = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueTransFat"]);
	var valueCholesterol = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueCholesterol"]);
	var valueSodium = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueSodium"]);
	var valueTotalCarb = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueTotalCarb"]);
	var valueFibers = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueFibers"]);
	var valueSugars = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueSugars"]);
	var valueProteins = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueProteins"]);
	var valueVitaminA = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueVitaminA"]);
	var valueVitaminC = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueVitaminC"]);
	var valueCalcium = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueCalcium"]);
	var valueIron = parseInt(interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["valueIron"]);



	htmlContent += '<div id="navigationDiv">';
	htmlContent += '<div id="previousQuestionButton" class="navigationButtons">\< Back</div>';
	htmlContent += '<div id="movePagesLeft" class="movePages" onclick="interactiveObj1.movePageLinks(\''+"left"+'\')"> < </div>';	
	htmlContent += '<div id="pageLinksContainer">';	//hides excess link numbers in navigation bar
	for(i=0; i<limit; i++)
	{
		htmlContent += '<div id="page_number_'+i+'" class="pageNumbersInIframe" onclick="interactiveObj1.moveToPage(\''+(i+1)+'\')"><div id="number_'+i+'" class="NumbersInPagination">'+(i+1)+'</div></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="movePagesRight" class="movePages" onclick="interactiveObj1.movePageLinks(\''+"right"+'\')"> > </div>';
	htmlContent += '<div id="nextQuestionButton" class="navigationButtons">Next \></div>';
	htmlContent += '</div>';
	// htmlContent += '<iframe id="questionIframe" src="'+interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]+'" title="Question Link"></iframe>';
	
	if(this.subject == "Sandwiches" || this.subject == "Wraps")
	{
		htmlContent += '<div id="extrasMainDiv">';
		htmlContent += '<form action="/action_page.php">'+
  					'<input type="checkbox" id="cheese" name="cheese" value="cheese">'+
  					'<label for="cheese"> Extra Cheese</label><br>'+
  					'<input type="checkbox" id="Veggies" name="Veggies" value="Veggies">'+
  					'<label for="Veggies">Extra Veggies</label><br>'+
  					'<input type="checkbox" id="Meat" name="Meat" value="Meat">'+
  					'<label for="Meat"> Meat</label><br><br>'+
  					'<div id="submit" onclick="interactiveObj1.addvalues()">Submit</div>'+
					'</form>';
		htmlContent += '</div>';
	}	

	htmlContent += '<div id="caloryCalculatorMainDiv">';
	htmlContent += '<div id="caloryCalculatorContentDiv">';
	htmlContent += '<div class="caloryCalculatorContentElements" style="font-size:35px; font-weight: bold;">Nutrition Facts</div>';
	htmlContent += '<div class="caloryCalculatorContentElements" style="font-size:22px;">'+interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]["name"]+'</div>';
	htmlContent += '<div class="drawLine" style="height:15px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Amount Per Serving: '+AmountPerServing+'(oz for drinks)</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div  id="totalCalories" class="caloryCalculatorContentElements">Calories: '+valueCalories+'</div>';
	htmlContent += '<div class="drawLine" style="height:7px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">%Daily Values</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div id-"totalFat" class="caloryCalculatorContentElements">Total Fat: '+valueTotalFat+'g</div>';
	htmlContent += '<div class="drawLine" style="height:2px; width:80%;"></div>';
	htmlContent += '<div class="caloryCalculatorContentSubElements">Saturated Fat: '+valueSatFat+'g</div>';
	htmlContent += '<div class="drawLine" style="height:2px; width:80%;"></div>';
	htmlContent += '<div class="caloryCalculatorContentSubElements">Trans Fat: '+valueTransFat+'g</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Cholestrol: '+valueCholesterol+'mg</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Sodium: '+valueSodium+'mg</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Total Carbohydrates: '+valueTotalCarb+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px; width:80%;"></div>';
	htmlContent += '<div class="caloryCalculatorContentSubElements">Dietary Fiber: '+valueFibers+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px; width:80%;"></div>';
	htmlContent += '<div class="caloryCalculatorContentSubElements">Sugar: '+valueSugars+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements"><b>Protein</b>: '+valueProteins+'</div>';
	htmlContent += '<div class="drawLine" style="height:7px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Vitamin A: '+valueVitaminA+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Vitamin C: '+valueVitaminC+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Calcium: '+valueCalcium+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements">Iron: '+valueIron+'</div>';
	htmlContent += '<div class="drawLine" style="height:2px"></div>';
	htmlContent += '<div class="caloryCalculatorContentElements" style="margin:10px;">* Percent daily Values are based on a 2000 calorie diet.</div>';
	htmlContent += '<div class="caloryCalculatorContentElements" style="margin:10px; color:green;">Disclaimer</div>';

	htmlContent += '</div>';
	htmlContent += '</div>';
	
	htmlContent += '<div id="pageEnd"><div>';
	$("#container1").html(htmlContent);

	if(limit<4)
	{
		$("#pageLinksContainer").css({"justify-content":"center"});
		$(".movePages").css({"pointer-events":"none"});
	}
	else
	{
		$("#pageLinksContainer").css({"justify-content":"flex-start"});
		$(".movePages").css({"pointer-events":"auto"});
	}

	if(interactiveObj1.subject=="English")
	{
		// $("#questionIframe").css({"top":$("#navigationDiv").height()});
		$("#questionIframe").css({"position":"relative"});

		if(interactiveObj1.subtopic=="Games")
		{
			$("#container1").css({"display":"flex","flex-direction":"column","align-items":"center"});
			$("#questionIframe").css({"min-width":"800px","min-height":"600px", "width":"800px", "height":"600px","border":"none"});
		}
	}


	interactiveObj1.moveToPage(parseInt(interactiveObj1.indexOfQuestion));	//update navigation bar on top
}

questionInteractive_iframe.prototype.addvalues = function()
{
	if(document.getElementById('cheese').checked) {
		interactiveObj1.newCalorie = interactiveObj1.newCalorie + 15;
		interactiveObj1.newFat = interactiveObj1.newFat + 15;
    	$("#totalCalories").html("Calories: "+interactiveObj1.newCalorie);
		$("#totalFat").html("Total Fat: "+interactiveObj1.newFat);
	} 
	if(document.getElementById('Veggies').checked) {
		interactiveObj1.newCalorie = interactiveObj1.newCalorie + 15;
		interactiveObj1.newFat = interactiveObj1.newFat + 15;
    	$("#totalCalories").html("Calories: "+interactiveObj1.newCalorie);
		$("#totalFat").html("Total Fat: "+interactiveObj1.newFat);
	} 
	if(document.getElementById('Meat').checked) {
		interactiveObj1.newCalorie = interactiveObj1.newCalorie + 15;
		interactiveObj1.newFat = interactiveObj1.newFat + 15;
    	$("#totalCalories").html("Calories: "+interactiveObj1.newCalorie);
		$("#totalFat").html("Total Fat: "+interactiveObj1.newFat);
	} 
}

questionInteractive_iframe.prototype.movePageLinks = function(pMove)
{
	var linkElementMarginPropertyVal = parseInt($(".pageNumbersInIframe").css("margin"))-1;
	var moveBy = parseInt($(".pageNumbersInIframe").width()) + (2*linkElementMarginPropertyVal);

	if(pMove == "left")	//back button is clicked
	{
		if(this.linkElementMarginLeft < 0)
		{
			this.linkElementMarginLeft += (2*moveBy);
			
			if(this.linkElementMarginLeft >= 0)	//starting with page 1
			{
				$("#page_number_0").animate({"margin-left":linkElementMarginPropertyVal+"px"});	
			}
			else
			{
				$("#page_number_0").animate({"margin-left":interactiveObj1.linkElementMarginLeft+"px"});
			}
		}
	}
	else if(pMove == "right")	//next button is clicked
	{
		if(this.linkElementMarginLeft > -(interactiveObj1.totalNumberOfQuestionsInSubtopic-4)*moveBy)
		{
			this.linkElementMarginLeft -= (2*moveBy);
			$("#page_number_0").animate({"margin-left":interactiveObj1.linkElementMarginLeft+"px"});
		}
	}
	else	// Page number is clicked 
	{
		if(parseInt(interactiveObj1.indexOfQuestion)>2)
		{
			this.linkElementMarginLeft = -((parseInt(interactiveObj1.indexOfQuestion)-2)*moveBy);
			$("#page_number_0").animate({"margin-left":interactiveObj1.linkElementMarginLeft+"px"});
		}
		else	//first 2 page numbers are clicked
		{
			$("#page_number_0").animate({"margin-left":linkElementMarginPropertyVal+"px"});	
		}
	}
}

questionInteractive_iframe.prototype.moveToPage = function(pPageNumber)
{
	if(pPageNumber < 1)
	{
		pPageNumber = interactiveObj1.totalNumberOfQuestionsInSubtopic; 
	}
	if(pPageNumber > interactiveObj1.totalNumberOfQuestionsInSubtopic)
	{
		pPageNumber = 1; 
	}

	interactiveObj1.indexOfQuestion = parseInt(pPageNumber);

	$("#nextQuestionButton, #previousQuestionButton").prop("onclick", null).off("click");	//remove previous click parameters
	$("#nextQuestionButton").click(function(){ interactiveObj1.moveToPage((parseInt(interactiveObj1.indexOfQuestion)+1)); });	//update new parameter value
	$("#previousQuestionButton").click(function(){ interactiveObj1.moveToPage((parseInt(interactiveObj1.indexOfQuestion)-1)); });	//update new parameter value

	$(".pageNumbersInIframe").css({"background":"#FAFAFA"});	//common colors for all
	$(".NumbersInPagination").css({"background":"#F3E1E2"});	//common colors for all

	$("#page_number_"+(interactiveObj1.indexOfQuestion - 1)).css({"background":"#F3E1E2"});	//contrasting colors for selected link
	$("#number_"+(interactiveObj1.indexOfQuestion - 1)).css({"background":"#FAFAFA"});	//contrasting colors for selected link
	// window.onbeforeunload = null;	//try to remove alert box default in browser
	// document.getElementById("questionIframe").onbeforeunload = null;
	$("#questionIframe").attr({"src":interactiveObjTest.subjectsAndQuestionContent[interactiveObj1.subject]["subtopic"][interactiveObj1.subtopic]["Link"+(parseInt(interactiveObj1.indexOfQuestion))]["QuestionLink"]});	//update iframe link

	interactiveObj1.movePageLinks("regular");	//point to the current page in navigation tab
}