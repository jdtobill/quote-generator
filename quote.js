var count = 0;
$(document).ready(function() {
	var target ="";
	display();
	
	function display() {
		var quotes = [["Life can only be understood backwards, but it must be lived forward.","Soren Kierkegaard"], 
		["In three words I can sum up everything I've learned about life. It goes on.","Robert Frost"],
		["A gem cannot be polished without friction, nor a man without trials.","Chinese Proverb"],
		["I have not failed. I've just found 10,000 ways that won't work.","Thomas Edison"],
		["To improve is to change, to be perfect is to change often.","Winston Churchill"],
		["Our greatest glory is not in never falling, but rising every tiem we fall.","Confucius"],
		["A wise man makes his own decisions, an ignorant man follows the public opinion.","Chinese Proverb"],
		["If I had eight hours to chop down a tree, I'd spend six sharpening my ax.","Abe Lincoln"],
		["Fear defeats more people than any other thing in the world.","Ralph Emerson"],
		["You cannot teach a man anything, you can only help him find it within himself.","unknown"],
		["The aim of the wise is not to secure pleasure, but to avoid pain.","Aristotle"],
		["From the errors of others, a wise man corrects his own.","Publilius Syrus"]];

		$("p.quote").append(quotes[count][0]);
		$("p.author").append("- " + quotes[count][1]);
		
		target="https://twitter.com/intent/tweet?text="
		target += quotes[count][0];
		target+= " -" + quotes[count][1];
		$("a.twitter-share-button").attr("href",target);
		
		if (count < quotes.length - 1) {
			count += 1;
		}else {
			count = 0;
		};
	};
		
	$("i.fa-arrow-circle-o-right").on( "click", function() {
		$("p.quote").empty();
		$("p.author").empty();
		display();
	});  
	
	$("i.fa-twitter").on( "click", function() {
		window.open(target,'newWin','width=400,height=400');
	});  
	
});
	