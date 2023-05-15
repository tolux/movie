import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { TMailOptions } from 'src/@types/app.types';

const configService = new ConfigService();

const CLIENT_ID = configService.get('CLIENT_ID');
const CLIENT_SECRET = configService.get('CLIENT_SECRET');
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = configService.get('REFRESH_TOKEN');

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (options: TMailOptions) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: '',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Movie <hello hee>',
      ...options,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

export { sendMail };
