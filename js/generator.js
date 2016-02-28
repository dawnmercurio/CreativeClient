	/*  Online Name Generators v.1.0 script is  made by Niels Gamborg webmaster at online-generator.com.  
	*    The script is  free (as in "free speech" and also as in "free beer") in anyway. Use it after you own likings.
	*    Peace and love. :)
	*/	
		function clientGenerator(){
			// Add your own words to the wordlist. Be carefull to obey the showed syntax
			
			var wordlist1 = ["Politician","Record Shop", "Building Contractor", "Hip Hop Artist", "Mexican Food Truck", "Mommy Blog", "Horticulturalist", "Local Hardware Store", "Seamstress","Daycare", "Banker", "New Restaurant Owner", "Struggling Restaurant Owner" , "Salon", "Labor Union", "Food Delivery Company", "Tech Startup", "Etsy Artist", "National Football Team", "National Department Store", "Pasta Sauce Company"];

			
			// Random numbers are made 
			var randomNumber1 = parseInt(Math.random() * wordlist1.length);
			var name = wordlist1[randomNumber1]			
			
			//alert(name); //Remove first two slashes to alert the name
			
			//If there's already a name it is removed  
			if(document.getElementById("result")){
				document.getElementById("placeholder").removeChild(document.getElementById("result"));
			}
			// A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
			var element = document.createElement("div");
			element.setAttribute("id", "result");
			element.appendChild(document.createTextNode(name));
			document.getElementById("placeholder").appendChild(element);
			
		}		
	
	
	
	/*  
	*    CAMPAIGN GENErATOR
	*   
	*/
		function campaignGenerator(){
			// Add your own words to the wordlist. Be carefull to obey the showed syntax
			
			var wordlist2 = ["Renewal","New Product Introduction","Promoting an Inaugural Yearly Event", "Business 50th Anniversary", "Beat the Competitor", "Achievement Announcement", "Conference (B2B)", "Brand Crisis Management: You've been memed!", "Represent at Highly Visible Event" , "Giving", "Unplanned Rush Event", "Contextual (online/targeted)"];
							
			
			// Random numbers are made 
			var randomNumber2 = parseInt(Math.random() * wordlist2.length);
			var name2 = wordlist2[randomNumber2];			
			
			//alert(name); //Remove first two slashes to alert the name
			
			//If there's already a name it is removed  
			if(document.getElementById("result2")){
				document.getElementById("placeholder2").removeChild(document.getElementById("result2"));
			}
			// A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
			var element = document.createElement("div");
			element.setAttribute("id", "result2");
			element.appendChild(document.createTextNode(name2));
			document.getElementById("placeholder2").appendChild(element);
		}		
		
		
		
	/*  
	*    CAMPAIGN GENErATOR
	*   
	*/
		function communicationGenerator(){
			// Add your own words to the wordlist. Be carefull to obey the showed syntax
			

			var wordlist3 = ["Brochure","Lawn Sign","Banner","Business Card", "Board of Directors Plaque", "Direct Mail Postcard", "Annual Report", "Tchotchke", "Jingle", "POS Display", "Poster", "Billboard Ad", "Folder", "Leave Behind", "Event Ticket", "Hang Tag", "Invitation", "Newspaper Double Truck Ad", "Program", "Integrated: email + direct mail"];
			
			// Random numbers are made 
			var randomNumber3 = parseInt(Math.random() * wordlist3.length);
			var name3 = wordlist3[randomNumber3];			
			
			//alert(name); //Remove first two slashes to alert the name
			
			//If there's already a name it is removed  
			if(document.getElementById("result3")){
				document.getElementById("placeholder3").removeChild(document.getElementById("result3"));
			}
			// A div element is created to show the generated name. The Name is added as a textnode. Textnode is added to the placeholder.
			var element = document.createElement("div");
			element.setAttribute("id", "result3");
			element.appendChild(document.createTextNode(name3));
			document.getElementById("placeholder3").appendChild(element);
		}		
	
			
		
	