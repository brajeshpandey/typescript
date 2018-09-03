// 1 Assignment

class YoutubeVideo {
  title:string;
  url:string;
  view:number;
  like:number;
  dislink:number;
  chanelName:string;

  constructor(video_tile:string,video_url:string,video_view:number,video_like:number,video_dislike:number,video_chanelName:string){
    this.title = video_tile;
    this.url = video_url;
    this.view = video_view;
    this.like = video_like;
    this.dislink = video_dislike;
    this.chanelName = video_chanelName;
  }

  getVideoValue = () => {
    return this.title;
  }
}

let videoDetails = new YoutubeVideo("Learn TypeScript for beginners","https://www.youtube.com/watch?v=xqYD8QXJX9U",168117,10000,2000,"NET Interview Preparation videos");
let getyouTubeValue = videoDetails.getVideoValue();

console.log(getyouTubeValue);


// 2 Assignment
class FaceBookProfle {
   private title:string;
   private profile_picture:string;
   private about:string;
   private contact_no:number;
   private email_id:string;
   private website_url:string;
   private date_of_birth:string;
   private edu:string;
   private job:string;
   private location:string;
   private relationship:string;
   private facebook_id:string;
   private birth_date:string;
   private birth_year:number;
   private gender:string;
   private interested_in:string;
   private language:string;
   private religious_view:string;
   private political_view:string;
  
    constructor(fb_title:string,fb_profile_picture:string,fb_about:string,
      fb_contact_no:number,fb_email_id:string,fb_website_url:string,fb_date_of_birth:string,
      fb_edu:string,fb_job:string,fb_location:string,fb_relationship:string,fb_facebook_id:string,
      fb_birth_date:string,fb_birth_year:number,fb_gender:string,fb_interested_in:string,
      fb_language:string,fb_religious_view:string,fb_political_view:string){
  
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
  
    getFacebookVideoValue = () =>{
      return this.about;
    }
    
    //get Year
    getBirthDate = () =>{
        return this.birth_year;
    }
    //set Year
    setBirthDate = (birthYearDate:number) => {
      this.birth_year = birthYearDate;
    }
  
  
  }
  
  let fbProfile = new FaceBookProfle("Brajesh Pandey","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMJegcF3D7vifftvOG2ZWgOs1m1fMt0btnL882dUVCqr058uC",
   "I'm a Software and web developer based in Mumbai. passionate websites and Software creator. Possess a strong motivational drive to succeed in the industry.",
  9833299507,"brajesh.pandey71@gmail.com","pandeybrajesh.com","25 DEC 1993","Matser Deagree","Software Developer",
   "Mumbai","yes","http://facebook.com/brajeshpandey007","25 DEC",1991,"Male","Female","English","Assemblies of God","Other");
  
   let FbUserDetail = fbProfile.getFacebookVideoValue();
   console.log(FbUserDetail);

  //set year detail in console
   fbProfile.setBirthDate(1995);
   let fbYearDetail = fbProfile.getBirthDate();
   console.log(fbYearDetail);