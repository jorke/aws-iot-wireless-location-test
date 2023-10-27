import { IoTWirelessClient, GetPositionEstimateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import

const client = new IoTWirelessClient({region:"ap-southeast-2"});
const input = { // GetPositionEstimateRequest
  WiFiAccessPoints: [ // WiFiAccessPoints
    { // WiFiAccessPoint
      MacAddress: "xx:xx:xx:xx:xx:xx", // required
      Rss: -32, // required
    },
  ],
  // Ip: {
  //   IpAddress: "xxxx"
  // }
}


//   CellTowers: { // CellTowers
//     Gsm: [ // GsmList
//       { // GsmObj
//         Mcc: Number("int"), // required
//         Mnc: Number("int"), // required
//         Lac: Number("int"), // required
//         GeranCid: Number("int"), // required
//         GsmLocalId: { // GsmLocalId
//           Bsic: Number("int"), // required
//           Bcch: Number("int"), // required
//         },
//         GsmTimingAdvance: Number("int"),
//         RxLevel: Number("int"),
//         GsmNmr: [ // GsmNmrList
//           { // GsmNmrObj
//             Bsic: Number("int"), // required
//             Bcch: Number("int"), // required
//             RxLevel: Number("int"),
//             GlobalIdentity: { // GlobalIdentity
//               Lac: Number("int"), // required
//               GeranCid: Number("int"), // required
//             },
//           },
//         ],
//       },
//     ],
//     Wcdma: [ // WcdmaList
//       { // WcdmaObj
//         Mcc: Number("int"), // required
//         Mnc: Number("int"), // required
//         Lac: Number("int"),
//         UtranCid: Number("int"), // required
//         WcdmaLocalId: { // WcdmaLocalId
//           Uarfcndl: Number("int"), // required
//           Psc: Number("int"), // required
//         },
//         Rscp: Number("int"),
//         PathLoss: Number("int"),
//         WcdmaNmr: [ // WcdmaNmrList
//           { // WcdmaNmrObj
//             Uarfcndl: Number("int"), // required
//             Psc: Number("int"), // required
//             UtranCid: Number("int"), // required
//             Rscp: Number("int"),
//             PathLoss: Number("int"),
//           },
//         ],
//       },
//     ],
//     Tdscdma: [ // TdscdmaList
//       { // TdscdmaObj
//         Mcc: Number("int"), // required
//         Mnc: Number("int"), // required
//         Lac: Number("int"),
//         UtranCid: Number("int"), // required
//         TdscdmaLocalId: { // TdscdmaLocalId
//           Uarfcn: Number("int"), // required
//           CellParams: Number("int"), // required
//         },
//         TdscdmaTimingAdvance: Number("int"),
//         Rscp: Number("int"),
//         PathLoss: Number("int"),
//         TdscdmaNmr: [ // TdscdmaNmrList
//           { // TdscdmaNmrObj
//             Uarfcn: Number("int"), // required
//             CellParams: Number("int"), // required
//             UtranCid: Number("int"),
//             Rscp: Number("int"),
//             PathLoss: Number("int"),
//           },
//         ],
//       },
//     ],
//     Lte: [ // LteList
//       { // LteObj
//         Mcc: Number("int"), // required
//         Mnc: Number("int"), // required
//         EutranCid: Number("int"), // required
//         Tac: Number("int"),
//         LteLocalId: { // LteLocalId
//           Pci: Number("int"), // required
//           Earfcn: Number("int"), // required
//         },
//         LteTimingAdvance: Number("int"),
//         Rsrp: Number("int"),
//         Rsrq: Number("float"),
//         NrCapable: true || false,
//         LteNmr: [ // LteNmrList
//           { // LteNmrObj
//             Pci: Number("int"), // required
//             Earfcn: Number("int"), // required
//             EutranCid: Number("int"), // required
//             Rsrp: Number("int"),
//             Rsrq: Number("float"),
//           },
//         ],
//       },
//     ],
//     Cdma: [ // CdmaList
//       { // CdmaObj
//         SystemId: Number("int"), // required
//         NetworkId: Number("int"), // required
//         BaseStationId: Number("int"), // required
//         RegistrationZone: Number("int"),
//         CdmaLocalId: { // CdmaLocalId
//           PnOffset: Number("int"), // required
//           CdmaChannel: Number("int"), // required
//         },
//         PilotPower: Number("int"),
//         BaseLat: Number("float"),
//         BaseLng: Number("float"),
//         CdmaNmr: [ // CdmaNmrList
//           { // CdmaNmrObj
//             PnOffset: Number("int"), // required
//             CdmaChannel: Number("int"), // required
//             PilotPower: Number("int"),
//             BaseStationId: Number("int"),
//           },
//         ],
//       },
//     ],
//   },
//   Ip: { // Ip
//     IpAddress: "STRING_VALUE", // required
//   },
//   Gnss: { // Gnss
//     Payload: "STRING_VALUE", // required
//     CaptureTime: Number("float"),
//     CaptureTimeAccuracy: Number("float"),
//     AssistPosition: [ // AssistPosition
//       Number("float"),
//     ],
//     AssistAltitude: Number("float"),
//     Use2DSolver: true || false,
//   },
//   Timestamp: new Date("TIMESTAMP"),
// };
const command = new GetPositionEstimateCommand(input);

try { 
  const response = await client.send(command);
  const data = Buffer.from(response.GeoJsonPayload).toString('utf8')
  console.log(JSON.parse(data))
} catch (err) {
  console.log(err)
}


