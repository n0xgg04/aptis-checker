import { Injectable } from '@nestjs/common';
import axios from "axios";
import {Root} from "./app.interface";
import {TelegramServiceService} from "./telegram-service.service";

@Injectable()
export class AppService {
  constructor(private telegram: TelegramServiceService) {}
  private notified_times = 0

  async getResult() {
    if(this.notified_times == 2) return;
    try{
    const result = await axios.get<Root>("https://aptistests.vn/api/api/tra-cuu?searchtxt=010204003235")
    if(result.data.data.thong_tin_lan_thi.length > 0 ){
      await this.telegram.sendNotification("Đã có kết quả thi Aptis\n" +
          `Họ tên: ${result.data.data.thong_tin_ca_nhan.ho_ten}\nKết quả: ${JSON.stringify(result.data.data.thong_tin_lan_thi)}`)
      this.notified_times++
    }else{
      try {
       
      }catch (err){
        console.log("Failed to send notification")
      }
    }
  }catch (err){
      console.log("Failed to get infos")
    }
  }
}
