
console.log('Export module');
// App Sentences
const sentence = 'when eye look group she many part since public we so group early change run old feel no well large have over line state even system only who word last problem right not should it old say the present mean you tell move both could point system never large plan see begin leave those end again by way also late may consider under world man get write too program need know take run school hand high get stand back present ask but after world up where since school state for part problem back good those who of eye another word';

const sentence2 = 'general it turn only more should still around order say if look not eye possible move now interes open call plan up word such keep may here place other but general right consider new man this then she of keep and interes public open the then like never any make vaery public large few child more end so between these under well into keep even school place from own where of home both around call use people show who say turn also new might course leave but do well move or do many course seem general eye follow keep call';

const sentence3 = 'next morning through who was from in front she went said something when smiled room the main worried turned you for a few this is interpret both with spoke want to send man take long vacation out he walked later that day party easy forget she state photo most we need phone colorful you later young street from across he was the street behind door final word other side saw him then you know later about empty bag into time left when first out some card dark plan she car window slowly think lost continue morning just news when sleep';

const sentence4 = 'system for should other do see still a stand long now few think from under life first year use want set right open say leave increase use these move become number small can group want as too after other come never lead will again while go without what after consider little think like then all plan go because too eye head possible part other even from mean other because might number down under hold real set those want increase one between this you well have form out write to there now for other last person ask fact where must the';

const sentence5 = 'because help even what public own with school how some do day which by say want line school own some other early year now only face but before day nation see out between all then good too that say up know nation interest during want end run about never ask between and form program state need late number it just all state through end eye when life would same that say how develop same other long home then even when however during possible into place of point plan if day after hold mean make long state year that in';

const sentence6 = 'what part long these ask word most plan which can you word present change word home such face most too man course thing even leave a show go all use course form only may world since must follow home eye know turn five even both present too before possible out or never long state to little word could a day new want on both keep with real give people call same early school there would other point large group time they a he this few find be give way word need from problem part use it own line school long';

const sentence7 = 'not place here as play or need that use on not way may what how see can between like part because fact with person most may even how through move state word change into each early system into out group with move old which increase say before think early get large around open then small all might long where large since many leave help or in child move take word few last long play then good make the point still thing as should high people last so can only well move first get only how get line might only with';

const sentence8 = 'now system as begin govern they should high however head little most word people no that where from which never between more fact then should just there program around general year then out more same group out day general could use state will again real when world in make it or he also word mean here high house not such will when mean come not write now hold very high become what stand such same say want there person order be keep it around few this line would they well you just or too early ask long become can ask';

const sentence9 = 'little run here so because like move become thing these house how after much hold too from over while never at program ask head place large problem home year before program where by during still much work feel line say like only make develop late do be if turn problem state these at place small number off all also as each offnever to what work long by because become on open child down look no when course who we course end again during people who get look such face call child take would own world may day but new';

const sentence10 = 'be head most come or then other that how govern be must just child much mean year system plan good through other only if not great nation fact world if order seem no again into number too turn off they turn system few just and great use without house increase eye too one only course know end early as thing in present which increase man day use what during these those move possible ask up too head so all during program however only real consider should because before have play be very give tell she hand show fact just end';




const arrOfSentence = [sentence, sentence2, sentence3, sentence4, sentence6, sentence7, sentence8, sentence9, sentence10];
export { arrOfSentence };


let cursor = true;
let speed = 450;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);
