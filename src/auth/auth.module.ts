import {Module} from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserDataModule } from "src/userData/userData.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports:[PassportModule,UserDataModule,
    
        JwtModule.register({
            secret:'key',
            signOptions:{
                expiresIn:"60s"
            }
        })
    
    ],
    providers:[LocalStrategy,AuthService,JwtStrategy],
     exports:[AuthService],
     controllers:[]
})
export class AuthModule {

}