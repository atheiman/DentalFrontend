
var activeTab;
var tab_ids=["app_inf_tab","med_his_tab","cli_not_tab","per_cha_tab","x_ray_tab"];

var activeImage;
//var image_ids={"image_1_thumb","image_2_thumb","image_3_thumb","image_4_thumb"];

function resetTabColors()
{

    for (var i=0,l=tab_ids.length; i<l; i++)
    {
        document.getElementById(tab_ids[i]).style.color='#FFF';
        document.getElementById(tab_ids[i]).style.backgroundColor='#528';
        document.getElementById(tab_ids[i]).style.borderColor='#528';
        document.getElementById(tab_ids[i]).style.cursor='pointer';
    }
}

function mOverTab(Tab)
{
	//if activeTab is not equal to Tab then perform hover
	if (activeTab != Tab.id){
		//change colors to hover colors
		Tab.style.color='#FFF';
		Tab.style.backgroundColor='#73A';
		Tab.style.borderColor='#73A';
	}
}

function mOutTab(Tab)
{
	//if activeTab is not equal to Tab then perform hover
	if (activeTab != Tab.id){
		//change colors back to default colors
		Tab.style.color='#FFF';
		Tab.style.backgroundColor='#528';
		Tab.style.borderColor='#528';
	}
}

function mClickTab(Tab)
{
	//if activeTab is not equal to tab then perform click
	if (activeTab != Tab.id){
		// reset all tab colors to default colors
		resetTabColors();
		// change colors to active tab colors
		Tab.style.color='#000';
		Tab.style.backgroundColor='#EEE';
		Tab.style.cursor='default';
		Tab.style.borderColor='#EEE';
		// change active tab to clicked tab
		activeTab = Tab.id;
		// change main content to clicked tab content to indicate change
		var newcontentfunctioncall = Tab.id.concat("_content_build");
		eval(newcontentfunctioncall + '();');
		// eval (newcontentfunctioncall);
		// document.getElementById("main_content").innerHTML=newcontentfunctioncall;
	}
}

//----------------------Main Content------------------------------

/*	When the tab is clicked, the tabClick function calls a function
	from here titled 'tab.id' + "_content_build"	*/

function app_inf_tab_content_build()
{
	document.getElementById("content").innerHTML="\
		<h2>Appointment Information</h2>\
		<form>\
			<span id='left_column'>\
				<fieldset>\
 					<legend>Patient info</legend>\
					First: <input type='text' size='15' maxlength='20' autofocus><br>\
					Last: <input type='text' size='15' maxlength='20'><br>\
					Date of Birth: <input type='date' name='date_of_birth'><br>\
					SSN: <input type='text' size='9' maxlength='9'><br>\
					Emergency Contact Info: <input type='text' size='30' maxlength='40'>\
				</fieldset>\
			</span>\
			<span id='right_column'>\
				<fieldset>\
 					<legend>Appointment info</legend>\
					Type: <select name='appt_type'><option value='prophy'>Prophy</option>\
					<option value='recall'>Recall</option></select><br>\
					Last Visit: <input type='date' name='last_visit'><br>\
					Fluoride Today? <select name='appt_type'><option value='yes'>Yes</option>\
					<option value='no'>No</option></select>\
				</fieldset>\
			</span>\
			<input type='submit' value='Update'>\
		</form>";
}

function med_his_tab_content_build()
{
	document.getElementById("content").innerHTML="\
		<h2>Medical History</h2>\
		<form>\
			<span id='left_column'>\
					Primary care physician: <input type='text' size='30' maxlength='30' autofocus><br>\
					Date of last physical: <input type='date'><br>\
					Hospitalized in the last 5 years? <select><option>Yes</option><option>No</option></select>\
					<input type='text' size='40' maxlength='40'><br>\
					Current medications: <input type='text' size='40' maxlength='40'><br>\
					Smoker? <select><option>Yes</option><option>No</option></select> How long?<input type='date'><br>\
					Artificial joints? <input type='text' size='30' maxlength='30'><br>\
					Known allergies? <input type='text' size='30' maxlength='40'><br>\
					Does your jaw click/pop? <select><option>Yes</option><option>No</option></select><br>\
					Clench or grind teeth at night? <select><option>Yes</option><option>No</option></select><br>\
					How often do you brush? <select><option>3+ times per day</option><option>2 times per day</option>\
					<option>1 time per day</option><option>every other day</option><option>once or twice per week</option>\
					<option>once or twice per month</option><option>never</option></select><br>\
					How often do you floss? <select><option>3+ times per day</option><option>2 times per day</option>\
					<option>1 time per day</option><option>every other day</option><option>once or twice per week</option>\
					<option>once or twice per month</option><option>never</option></select><br>\
					Gums bleed while brushing/flossing? <select><option>Yes</option><option>No</option></select><br>\
					Sensitive to cold/hot/sweets? <select><option>Yes</option><option>No</option></select>\
			</span>\
			<span id='right_column'>\
					<input type='checkbox' name='med_hist_checkboxes'> Pregnant <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Cancer <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Diabetic <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Anemia <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Heart disease <br>\
					<input type='checkbox' name='med_hist_checkboxes'> High blood pressure <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Pre-medication required <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Blood thinner <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Radiation therapy <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Chemotherapy <br>\
					<input type='checkbox' name='med_hist_checkboxes'> HIV / AIDS <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Tuberculosis <br>\
					<input type='checkbox' name='med_hist_checkboxes'> Hepatitis <br>\
			</span>\
			<input type='submit' value='Update'>\
		</form>";
}

function cli_not_tab_content_build()
{
	document.getElementById("content").innerHTML="\
		<h2>Clinical Notes</h2>\
		<form>\
			<span id='left_column'>\
					Clinical Notes from appointment on: <select><option>mm/dd/yyyy</option><option>mm/dd/yyyy</option></select><br>\
					<textarea rows='20' cols='45' maxlength='350' disabled>\
These are the clinical notes from previous appts. They can not be edited.\
 The drop down above allows the hygienist to select which appointment from the past to view notes from.</textarea>\
			</span>\
			<span id='right_column'>\
					Today's Clinical Notes:<br>\
					<textarea rows='20' cols='45' maxlength='350' autofocus placeholder='The hygienist can record\
 clinical notes for today in this textarea'></textarea>\
			</span>\
			<input type='submit' value='Update'>\
		</form>";
}

function per_cha_tab_content_build()
{
	document.getElementById("content").innerHTML="\
		<form>\
			<div id='table_holder'>\
				<table>\
					<tr>\
						<td><input type='text' size='2' maxlength='2' placeholder='1' autofocus>\
						<td><input type='text' size='2' maxlength='2' placeholder='2'>\
						<td><input type='text' size='2' maxlength='2' placeholder='3'>\
						<td><input type='text' size='2' maxlength='2' placeholder='4'>\
						<td><input type='text' size='2' maxlength='2' placeholder='5'>\
						<td><input type='text' size='2' maxlength='2' placeholder='6'>\
						<td><input type='text' size='2' maxlength='2' placeholder='7'>\
						<td><input type='text' size='2' maxlength='2' placeholder='8'>\
						<td><input type='text' size='2' maxlength='2' placeholder='9'>\
						<td><input type='text' size='2' maxlength='2' placeholder='10'>\
						<td><input type='text' size='2' maxlength='2' placeholder='11'>\
						<td><input type='text' size='2' maxlength='2' placeholder='12'>\
						<td><input type='text' size='2' maxlength='2' placeholder='13'>\
						<td><input type='text' size='2' maxlength='2' placeholder='14'>\
						<td><input type='text' size='2' maxlength='2' placeholder='15'>\
						<td><input type='text' size='2' maxlength='2' placeholder='16'>\
					</tr>\
					<tr><td>1<td>2<td>3<td>4<td>5<td>6<td>7<td>8<td>9<td>10<td>11<td>12<td>13<td>14<td>15<td>16</tr>\
					<tr>\
						<td><input type='text' size='2' maxlength='2' placeholder='1'>\
						<td><input type='text' size='2' maxlength='2' placeholder='2'>\
						<td><input type='text' size='2' maxlength='2' placeholder='3'>\
						<td><input type='text' size='2' maxlength='2' placeholder='4'>\
						<td><input type='text' size='2' maxlength='2' placeholder='5'>\
						<td><input type='text' size='2' maxlength='2' placeholder='6'>\
						<td><input type='text' size='2' maxlength='2' placeholder='7'>\
						<td><input type='text' size='2' maxlength='2' placeholder='8'>\
						<td><input type='text' size='2' maxlength='2' placeholder='9'>\
						<td><input type='text' size='2' maxlength='2' placeholder='10'>\
						<td><input type='text' size='2' maxlength='2' placeholder='11'>\
						<td><input type='text' size='2' maxlength='2' placeholder='12'>\
						<td><input type='text' size='2' maxlength='2' placeholder='13'>\
						<td><input type='text' size='2' maxlength='2' placeholder='14'>\
						<td><input type='text' size='2' maxlength='2' placeholder='15'>\
						<td><input type='text' size='2' maxlength='2' placeholder='16'>\
					</tr>\
					<tr>\
						<td><input type='text' size='2' maxlength='2' placeholder='1'>\
						<td><input type='text' size='2' maxlength='2' placeholder='2'>\
						<td><input type='text' size='2' maxlength='2' placeholder='3'>\
						<td><input type='text' size='2' maxlength='2' placeholder='4'>\
						<td><input type='text' size='2' maxlength='2' placeholder='5'>\
						<td><input type='text' size='2' maxlength='2' placeholder='6'>\
						<td><input type='text' size='2' maxlength='2' placeholder='7'>\
						<td><input type='text' size='2' maxlength='2' placeholder='8'>\
						<td><input type='text' size='2' maxlength='2' placeholder='9'>\
						<td><input type='text' size='2' maxlength='2' placeholder='10'>\
						<td><input type='text' size='2' maxlength='2' placeholder='11'>\
						<td><input type='text' size='2' maxlength='2' placeholder='12'>\
						<td><input type='text' size='2' maxlength='2' placeholder='13'>\
						<td><input type='text' size='2' maxlength='2' placeholder='14'>\
						<td><input type='text' size='2' maxlength='2' placeholder='15'>\
						<td><input type='text' size='2' maxlength='2' placeholder='16'>\
					</tr>\
					<tr><td>1<td>2<td>3<td>4<td>5<td>6<td>7<td>8<td>9<td>10<td>11<td>12<td>13<td>14<td>15<td>16</tr>\
					<tr>\
						<td><input type='text' size='2' maxlength='2' placeholder='1'>\
						<td><input type='text' size='2' maxlength='2' placeholder='2'>\
						<td><input type='text' size='2' maxlength='2' placeholder='3'>\
						<td><input type='text' size='2' maxlength='2' placeholder='4'>\
						<td><input type='text' size='2' maxlength='2' placeholder='5'>\
						<td><input type='text' size='2' maxlength='2' placeholder='6'>\
						<td><input type='text' size='2' maxlength='2' placeholder='7'>\
						<td><input type='text' size='2' maxlength='2' placeholder='8'>\
						<td><input type='text' size='2' maxlength='2' placeholder='9'>\
						<td><input type='text' size='2' maxlength='2' placeholder='10'>\
						<td><input type='text' size='2' maxlength='2' placeholder='11'>\
						<td><input type='text' size='2' maxlength='2' placeholder='12'>\
						<td><input type='text' size='2' maxlength='2' placeholder='13'>\
						<td><input type='text' size='2' maxlength='2' placeholder='14'>\
						<td><input type='text' size='2' maxlength='2' placeholder='15'>\
						<td><input type='text' size='2' maxlength='2' placeholder='16'>\
					</tr>\
				</table>\
			</div>\
			<input type='submit' value='Update'>\
		</form>\
		<br><a href='images/perio_chart.jpg' target='blank'>Click for an image of a Periodontal Form</a>";
}

function x_ray_tab_content_build()
{
	document.getElementById("content").innerHTML="\
		<h2>X-Ray Imaging</h2>\
		<div id='image_display_div'>\
			<img id='display_img' src='images/teeth_1.jpg' height='350'>\
		</div>\
		<div id='thumbnails_div'>\
			<img class=thumb_img id='image_1_thumb' src='images/teeth_1.jpg' height='110' onmouseover='mOverImage(this)' onmouseout='mOutImage(this)' onclick='mClickImage(this)'>\
			<img class=thumb_img id='image_2_thumb' src='images/teeth_2.jpg' height='110' onmouseover='mOverImage(this)' onmouseout='mOutImage(this)' onclick='mClickImage(this)'>\
			<img class=thumb_img id='image_3_thumb' src='images/teeth_3.jpg' height='110' onmouseover='mOverImage(this)' onmouseout='mOutImage(this)' onclick='mClickImage(this)'>\
			<img class=thumb_img id='image_4_thumb' src='images/teeth_4.jpg' height='110' onmouseover='mOverImage(this)' onmouseout='mOutImage(this)' onclick='mClickImage(this)'>\
		</div>";

		resetImageColors();
		// change color to active image colors
		document.getElementById("image_1_thumb").style.backgroundColor='#FFF';
		document.getElementById("image_1_thumb").style.cursor='default';
		// change active tab to clicked tab
		activeImage = 'image_1_thumb';
		// change Display Image to clicked image content to indicate change
		document.getElementById("display_img").src=document.getElementById("image_1_thumb").src;
}

function resetImageColors()
{

//var image_ids={"image_1_thumb","image_2_thumb","image_3_thumb","image_4_thumb"];

	document.getElementById("image_1_thumb").style.backgroundColor='#000';
	document.getElementById("image_1_thumb").style.cursor='pointer';
	document.getElementById("image_2_thumb").style.backgroundColor='#000';
	document.getElementById("image_2_thumb").style.cursor='pointer';
	document.getElementById("image_3_thumb").style.backgroundColor='#000';
	document.getElementById("image_3_thumb").style.cursor='pointer';
	document.getElementById("image_4_thumb").style.backgroundColor='#000';
	document.getElementById("image_4_thumb").style.cursor='pointer';
}

function mOverImage(Image)
{
	//if activeImage is not equal to Image then perform hover
	if (activeImage != Image.id){
		//change color to hover color
		Image.style.backgroundColor='#AAA';
	}
}

function mOutImage(Image)
{
	//if activeImage is not equal to Image then perform hover
	if (activeImage != Image.id){
		//change color back to default color
		Image.style.backgroundColor='#000';
	}
}

function mClickImage(Image)
{
	//if activeImage is not equal to Image then perform click
	if (activeImage != Image.id){
		// reset all Image colors to default color
		resetImageColors();
		// change color to active image colors
		Image.style.backgroundColor='#FFF';
		Image.style.cursor='default';
		// change active tab to clicked tab
		activeImage = Image.id;
		// change Display Image to clicked image content to indicate change
		document.getElementById("display_img").src=Image.src;
		//var newcontentfunctioncall = Image.id.concat("_content_build");
		//eval(newcontentfunctioncall + '();');
		// eval (newcontentfunctioncall);
		// document.getElementById("main_content").innerHTML=newcontentfunctioncall;
	}
}
