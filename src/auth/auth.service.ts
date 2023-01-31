import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserData } from "src/userData/userData.entity";

@Injectable()
export class AuthService {
constructor(private readonly jwtService:JwtService){}


generateToken(payload:UserData){
    return this.jwtService.sign(payload)
}

}