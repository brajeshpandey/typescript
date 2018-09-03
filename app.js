// 1 Assignment
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(video_tile, video_url, video_view, video_like, video_dislike, video_chanelName) {
        var _this = this;
        this.getVideoValue = function () {
            return _this.title;
        };
        this.title = video_tile;
        this.url = video_url;
        this.view = video_view;
        this.like = video_like;
        this.dislink = video_dislike;
        this.chanelName = video_chanelName;
    }
    return YoutubeVideo;
}());
var videoDetails = new YoutubeVideo("Learn TypeScript for beginners", "https://www.youtube.com/watch?v=xqYD8QXJX9U", 168117, 10000, 2000, "NET Interview Preparation videos");
var getyouTubeValue = videoDetails.getVideoValue();
console.log(getyouTubeValue);
// 2 Assignment
var FaceBookProfle = /** @class */ (function () {
    function FaceBookProfle(fb_title, fb_profile_picture, fb_about, fb_contact_no, fb_email_id, fb_website_url, fb_date_of_birth, fb_edu, fb_job, fb_location, fb_relationship, fb_facebook_id, fb_birth_date, fb_birth_year, fb_gender, fb_interested_in, fb_language, fb_religious_view, fb_political_view) {
        var _this = this;
        this.getFacebookVideoValue = function () {
            return _this.about;
        };
        //get Year
        this.getBirthDate = function () {
            return _this.birth_year;
        };
        //set Year
        this.setBirthDate = function (birthYearDate) {
            _this.birth_year = birthYearDate;
        };
        this.title = fb_title;
        this.profile_picture = fb_profile_picture;
        this.about = fb_about;
        this.contact_no = fb_contact_no;
        this.email_id = fb_email_id;
        this.website_url = fb_website_url;
        this.date_of_birth = fb_date_of_birth;
        this.edu = fb_edu;
        this.job = fb_job;
        this.location = fb_location;
        this.relationship = fb_relationship;
        this.facebook_id = fb_facebook_id;
        this.birth_date = fb_birth_date;
        this.birth_year = fb_birth_year;
        this.gender = fb_gender;
        this.interested_in = fb_interested_in;
        this.language = fb_language;
        this.religious_view = fb_religious_view;
        this.political_view = fb_political_view;
    }
    return FaceBookProfle;
}());
var fbProfile = new FaceBookProfle("Brajesh Pandey", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMJegcF3D7vifftvOG2ZWgOs1m1fMt0btnL882dUVCqr058uC", "I'm a Software and web developer based in Mumbai. passionate websites and Software creator. Possess a strong motivational drive to succeed in the industry.", 9833299507, "brajesh.pandey71@gmail.com", "pandeybrajesh.com", "25 DEC 1993", "Matser Deagree", "Software Developer", "Mumbai", "yes", "http://facebook.com/brajeshpandey007", "25 DEC", 1991, "Male", "Female", "English", "Assemblies of God", "Other");
var FbUserDetail = fbProfile.getFacebookVideoValue();
console.log(FbUserDetail);
//set year detail in console
fbProfile.setBirthDate(1995);
var fbYearDetail = fbProfile.getBirthDate();
console.log(fbYearDetail);
