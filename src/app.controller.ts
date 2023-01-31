

import { UseInterceptors,UploadedFile,Req } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "./auth/auth.service";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { stringify } from "querystring";
import { RoleGuard } from "./role.guard";
import { Role } from "./constants";




@Controller()
export class AppController {
  constructor(private readonly authService:AuthService){}
    @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req):Promise<string> {
    return this.authService.generateToken(req.user)

    return 
  }

// now i want if anyone send this token then i give him access

@Get('/android-developer')
@UseGuards(AuthGuard('jwt'), new RoleGuard(Role.ANDROID_DEVELOPER))
androidDeveloper(@Request() req):string {
  return 'this is android developer'+JSON.stringify(req.user)
}




@Get('/web-developer')
@UseGuards(AuthGuard('jwt') , new RoleGuard(Role.WEB_DEVELOPER))
webDeveloper(@Request() req):string {
  return 'this is web developer'+JSON.stringify(  req.user)
}



}