var name		= "Mulcher";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Tended 7 weedy patches";
var status_text		= "Oho! You're getting pretty handy with that hoe. You've earned a Mulcher badge.";
var last_published	= 1336502273;
var is_shareworthy	= 0;
var url		= "mulcher";
var category		= "trees";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/mulcher_1304983839.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/mulcher_1304983839_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/mulcher_1304983839_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/mulcher_1304983839_40.png";
function on_apply(pc){
	
}
var conditions = {
	187 : {
		type	: "group_sum",
		group	: "VERB:tend",
		value	: "7"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(100 * multiplier), true);
	pc.stats_add_favor_points("mab", round_to_5(15 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 100,
	"favor"	: {
		"giant"		: "mab",
		"points"	: 15
	}
};

//log.info("mulcher.js LOADED");

// generated ok (NO DATE)
