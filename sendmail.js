"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "apikey", // generated ethereal user
      pass: "", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"clubcuvi@gmail.com" <clubcuvi@gmail.com>', // sender address
    bcc:
      "qorehf110@gmail.com, melodygggs@gmail.com, gyusika@naver.com,nyaha52@naver.com,enjoycouple@naver.com,we_dnnd@naver.com,baeggopvilla@sandboxnetwork.net,no1-media@daum.net,newmedia@studiosantaent.com,seohyun.lee1@cj.net,parksang1886@gmail.com,jdbent001@gmail.com,3949dang9@daum.net,69binn@sandbox.co.kr,egura403@gmail.com,jdbent001@gmail.com,dfgvv@sandbox.co.kr,copychu@sandboxnetwork.net,business@cellabel.kr,handstartwo@gmail.com,tjrldnjswwkd@naver.com,psickuniv@sandboxnetwork.net,sangnomduo@naver.com,seolo.co.kr,misterssim@naver.com,ese1629@gmail.com,hidex16@naver.com,jdbent001@gmail.com,mki@glcom.kr,ad@vivolab.tv,biz@villionview.com,oneweek7777777@gmail.com,pju7463@naver.com,twinsmakeup@naver.com,leewounsuk@naver.com,han@cudb.kr,youngjachannel@gmail.com,rackgu@naver.com,guragolf@sandbox.co.kr,hugrltn@gmail.com,rhc3838@naver.com,utbskstv@gmail.com,diatvad@cj.net,jdbent002@gmail.com,the8396@sandbox.co.kr,withjdm@naver.com,ihavecarr@gmail.com,8cok4p2258@gmail.com,bmmedia@bmmedia.co.kr,ss5373@naver.com",
    subject: "스타와 팬을 연결하다, 커비(CUVI) 에서 협업 제안드립니다!", // Subject line
    html:
      "<br>안녕하세요<br>스타와 팬을 연결하다, 커비(CUVI) 입니다!<br><br>'커비(CUVI)' 는 팬이 스타에게 영상 메세지를 요청 & 구매하고,<br>스타로부터 받은 영상 메세지를 선물 또는 소장함으로써,<br>스타와 팬을 연결하는 웹 플랫폼 서비스입니다.<br><br>현재 미국에서는 'Cameo' 라는 비슷한 비지니스 모델의 플랫폼이 굉장히 활성화되어 있습니다.<br>Harvard University, 연세대 출신의 유능한 팀원들과 한국의 'Cameo'를 만드는 걸음에 함께해주시면 감사하겠습니다.<br><br>제안서 첨부하여 메일 드립니다.<br>검토후에 답장주시면, 자세한 안내드리겠습니다.<br>* 1차 입점모집은 3월 14일까지 진행 예정입니다.<br><br>-----------------------------------------------------------------------------------------------------------<br><br>We hope this message finds you well. We are founders of CUVI, a startup that aspires to connect Korean celebrities, influencers, and artists with fans through short and simple video messages.<br>Our web-based content platform service allows fans to request and purchase customized video messages and shoutouts for their special occasions, including birthdays and anniversaries.<br><br>Initially running on a similar business model to “Cameo” in the US, we are eventually hoping to innovate and branch out into other creator-centric revenue streams, including autographed merchandise, subscription-based services, and virtual meet-and-greets.<br>We are attaching our business proposal in PDF. Please let us know by March 14th to indicate your interest in joining our team as a creator.<br><br><br><div><img src='cid:sign.png' /></div>",
    attachments: [
      {
        // filename and content type is derived from path
        path: "CUVI 1차 입점 제안서.pdf",
      },
      {
        filename: "sign.png",
        path: "sign.png",
        cid: "sign.png",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
