import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class TelegramServiceService {
    async sendNotification(content: string){
        const result = await axios.post("https://api.telegram.org/bot7259960115:AAERcygUKZF1UChgOubU0hijuQVQ_0KohvA/sendMessage",{
            chat_id: 1255793627,
            text: content
        })
        return result.data
    }
}
