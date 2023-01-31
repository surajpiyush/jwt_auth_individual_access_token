import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserData } from "src/userData/userData.entity";
import { UserDataService } from "src/userData/userData.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

constructor(private userDataService:UserDataService){
    super();
}

validate(username:string , password:string):UserData{

const user:UserData=this.userDataService.getUserByName(username)
if(user===undefined) throw new UnauthorizedException()

if(user!== undefined && user.password===password){
    return user
}
else{
    throw new UnauthorizedException();
}

}


}