export class User{

	  public firstname!:String;
      public lastname!:String;
	  public dateofbirth!:Date;
	  public address!:String;
	  public city!:String;
	  public state!:String;
	  public country!:String;
	  public pincode!:String;
	  public pannumber!:String;
	  public aadharnumber!:String;
	  public uploadaadharcard!:any;
	  public uploadpancard!:any;
      public loantype!:String;
      public loanamount!:String;
	  public loanterm!:String;
	  public mail!:String;
	  public current_task_id:String;
	  public current_task_name:String;

	 constructor(firstname:String,
     lastname:String,
	 dateofbirth:Date,
	 address:String,
	 city:String,
	 state:String,
	 country:String,
	 pincode:String,
	 pannumber:String,
	 aadharnumber:String,
	 uploadaadharcard:any,
	 uploadpancard:any,
     loantype:String,
     loanamount:String,
	 loanterm:String,
	 mail:String,current_task_id:String,current_task_name:String){
	 this.firstname=firstname;
     this.lastname=lastname;
	 this.dateofbirth=dateofbirth;
	 this.address=address;
	 this.city=city;
	 this.state=state; 	
	 this.country=country;
	 this.pincode=pincode;
	 this.pannumber=pannumber;
	 this.aadharnumber=aadharnumber;
	 this.uploadaadharcard=uploadaadharcard;
	 this.uploadpancard=uploadpancard;
     this.loantype=loantype;
     this.loanamount=loanamount;
	 this.loanterm=loanterm;
	 this.mail=mail;
	 this.current_task_id=current_task_id;
	 this.current_task_name=current_task_name;

	  }
}