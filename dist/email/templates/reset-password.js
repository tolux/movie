"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResetPasswordMail = void 0;
const generateResetPasswordMail = (otp) => `<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<style type="text/css">
		@font-face {
			font-family: "Rebond Grotesque";
			font-style: normal;
			font-weight: normal;
			src: url(https://res.cloudinary.com/dicdmfd61/raw/upload/v1682427710/Email-assets/RebondGrotesque/woff-format/RebondGrotesque_foehm7.woff) format('woff');
		}

		* {
			box-sizing: border-box;
			font-family: "Rebond Grotesque", sans-serif;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}


		.desktop_hide,
		.desktop_hide table {
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:645px) {
			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-3 .column-1 .block-1.paragraph_block td.pad {
				padding: 10px !important;
			}

			.row-1 .column-2 .block-1.image_block td.pad {
				padding: 0 0 0 5px !important;
			}


			.row-1 .column-1 .block-3.paragraph_block td.pad>div {
				font-size: 24px !important;
			}

			.row-1 .column-1 .block-2.paragraph_block td.pad>div {
				font-size: 14px !important;
			}

			.row-1 .column-1 .block-1.image_block td.pad {
				padding: 0 0 0 10px !important;
			}

			.row-5 .column-1 .block-1.paragraph_block td.pad {
				padding: 10px 10px 35px !important;
			}

			.row-6 .column-1 .block-3.social_block td.pad {
				padding: 5px !important;
			}

			.row-6 .column-1 .block-2.paragraph_block td.pad>div {
				text-align: left !important;
			}

			.row-6 .column-1 .block-2.paragraph_block td.pad {
				padding: 10px 10px 0 45px !important;
			}

			.row-6 .column-2 .block-1.paragraph_block td.pad>div {
				text-align: right !important;
				font-size: 12px !important;
			}

			.row-6 .column-2 .block-1.paragraph_block td.pad {
				padding: 25px 10px 10px !important;
			}

			.row-6 .column-2 {
				padding: 5px 5px 5px 25px !important;
			}
		}
	</style>
</head>

<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #00312D;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 625px;"
										width="625">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-left:10px;width:100%;padding-right:0px;">
																<div align="left" class="alignment"
																	style="line-height:10px"><img
																		src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682426060/Email-assets/Smatta_Logo_vzjbo4.png"
																		style="display: block; height: auto; border: 0; width: 109px; max-width: 100%;"
																		alt="smatta logo"
																		width="109" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-left:10px;padding-right:10px;">
																<div
																	style="color:#ffffff;padding-top: 16px; direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:30px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:34.8px;">
																	<p class="heading_msg_2" style="margin: 0; width: 150px;"><strong>This won't take long!</strong></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="right" class="alignment"
																	style="line-height:10px"><img
																		src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682421105/Email-assets/Lock_atcj5q.png"
																		style="display: block; height: auto; border: 0; width: 240px; max-width: 100%;"
																		alt="Green Lock"
																		width="203" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 625px;"
										width="625">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#101112;direction:ltr;font-family:inherit,Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;padding-bottom: 5px;">Check your email!</p>
																	<p style="margin: 0;">Kindly enter the 6-digit number that was sent to your email.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 625px;"
										width="625">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 3px;">This code is valid for 5 minutes</p>
																	<p style="margin: 0; margin-bottom: 3px; padding-bottom: 15px;">Verification code</p>
																	<p style="margin: 0;color: #fff; background-color: #00312D;width: 100px; letter-spacing: 5px; text-align: center; border-radius: 3px;"><span
																		style="background-color: transparent; font-family: inherit;">${otp}</span>
																</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 625px;"
										width="625">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0; margin-bottom: 2px;">Don’t recognize this activity?
																	</p>
																	<p style="margin: 0;">Please reset your password and contact customer support immediately.</p>
																	<p style="margin: 0; padding-top: 30px;">This is an automated message, please do not reply.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #AAE7C6;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 625px;"
										width="625">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<div class="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-left:45px;padding-right:10px;padding-top:10px;">
																<div
																	style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
																	<p style="margin: 0;"><a href="https://smatta.co" target="_blank" style="text-decoration: none;color: #000;">smatta.co</a></p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="social_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:10px;padding-right:10px;text-align:left;">
																<div align="left" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="144px">
																		<tr>
																			<td style="padding:0 4px 0 0;"><a
																					href="https://www.instagram.com/smattaglobal"
																					target="_blank"><img alt="Instagram"
																						height="32"
																						src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682426060/Email-assets/Instagram_qzilyz.png"
																						style="display: block; height: auto; border: 0;"
																						title="instagram"
																						width="32"/></a></td>
																			<td style="padding:0 4px 0 0;"><a
																					href="https://www.facebook.com/profile.php?id=100091766345608"
																					target="_blank"><img alt="Facebook"
																						height="32"
																						src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682426060/Email-assets/Facebook_goijlo.png"
																						style="display: block; height: auto; border: 0;"
																						title="facebook"
																						width="32" /></a></td>
																			<td style="padding:0 4px 0 0;"><a
																					href="https://www.linkedin.com/in/smatta-global-120865271"
																					target="_blank"><img alt="Linkedin"
																						height="32"
																						src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682426060/Email-assets/LinkedIn_nspkl7.png"
																						style="display: block; height: auto; border: 0;"
																						title="linkedin"
																						width="32" /></a></td>
																			<td style="padding:0 4px 0 0;"><a
																					href="https://www.twitter.com/Smatta_Global"
																					target="_blank"><img alt="Twitter"
																						height="32"
																						src="https://res.cloudinary.com/dicdmfd61/image/upload/v1682426060/Email-assets/Twitter_ori6fr.png"
																						style="display: block; height: auto; border: 0;"
																						title="twitter"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 60px; padding-right: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:5px;padding-right:10px;padding-top:20px;">
																<div
																	style="color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:right;mso-line-height-alt:16.8px;">
																	<p style="margin: 0; margin-bottom: 2px;"><a
																			href="https://www.instagram.com/smattaglobal" rel="noopener"
																			style="text-decoration: none; color: #000000;"
																			target="_blank">ABOUT</a></p>
																	<p style="margin: 0; margin-bottom: 2px;"><a
																			href="https://www.instagram.com/smattaglobal" rel="noopener"
																			style="text-decoration: none; color: #000000;"
																			target="_blank">CONTACT US</a></p>
																	<p style="margin: 0;"><a href="https://www.instagram.com/smattaglobal"
																			rel="noopener"
																			style="text-decoration: none; color: #000000;"
																			target="_blank">PRIVACY POLICY</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>

</html>`;
exports.generateResetPasswordMail = generateResetPasswordMail;
//# sourceMappingURL=reset-password.js.map