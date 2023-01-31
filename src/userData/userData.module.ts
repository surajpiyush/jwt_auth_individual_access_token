import { Module } from "@nestjs/common";
import { UserDataService } from "./userData.service";

@Module({
    imports:[],
    providers:[UserDataService],
    exports:[UserDataService]
})
export class UserDataModule {

}