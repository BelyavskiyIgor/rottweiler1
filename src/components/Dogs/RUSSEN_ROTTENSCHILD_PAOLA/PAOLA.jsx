import React from "react";
import RussenYava from "../../../images/dogs/RUSSEN_ROTTENSCHILD_YAVA.JPG"
import style from "../Dogs.module.css"
const Yava = () => {
    return(
        <div>
            <div>

            <div>
                <h1 align="center" className={style.H1}>RUSSEN ROTTENSCHILD YAVA</h1></div>
            <img src={RussenYava} className={style.img}/>
            </div>
            <div>
                <h3 align="center" className={style.H3}>Pedigree</h3>
            </div>
            <div className={style.fontTable} align="right">
                <table border="3" width="900" height= "640">
                    <tbody>
                    <tr>
                        <td rowSpan="8" >
                            <p align="center">
                                SHERIFROTTHAUS  Howard
                            </p>
                        </td>
                        <td rowSpan="4" >
                            <p align="center">
                                Filou v. Rauberweg</p>
                        </td>
                        <td rowSpan="2" >
                            <p align="center">
                                Brutus v. Rauberweg
                            </p>
                        </td>
                        <td  height="12">
                            Champ v.d. Scherau
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Arabella v. Katzerbachtal
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" >
                            <p align="center">
                                Mona v. Ostsachen </p>
                        </td>
                        <td  height="12">
                            Ben v.d. Scherau
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Aranka v. Ilmbruke
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="4" >
                            <p align="center">
                                Cherny Legion Lira
                            </p>
                        </td>
                        <td rowSpan="2" >
                            <p align="center">
                                Indio of Nicolas Lion</p>
                        </td>
                        <td  height="12">
                            Mambo of  Nicolas Lion
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Wolga of Nicolas Lion
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" >
                            <p align="center">
                                Cherny Legion Honda </p>
                        </td>
                        <td  height="12">
                            Cherny Legion Armstrong
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Holgerland Evi
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="8" >
                            <p align="center">
                                Russen Rottenschild Yusta</p>
                        </td>
                        <td rowSpan="4" >
                            <p align="center">
                                Rus CH Chernoe Bratstvo
                                Lancelot
                            </p>
                        </td>
                        <td rowSpan="2" >
                            <p align="center">
                                Juda Flasch Rouse</p>
                        </td>
                        <td  height="12">
                            Merlin Flasch Rouse
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Fuksa German Blood Line
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" >
                            <p align="center">
                                Chernoe Bratstvo Kralja</p>
                        </td>
                        <td  height="12">
                            Flegel v. Tegler Fliess
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Olburd Tekila
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="4" >
                            <p align="center">
                                Russen Rottenschild Cesa </p>
                        </td>
                        <td rowSpan="2" >
                            <p align="center">
                                Felix vom Haus Zschammer</p>
                        </td>
                        <td  height="12">
                            Cujo von der Burg Weibertreu
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Baccara vom Haus Zschammer
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" >
                            <p align="center">
                                Pandora vom Rauberweg</p>
                        </td>
                        <td  height="12">
                            Mambo v.d. Crossener Ranch
                        </td>
                    </tr>
                    <tr>
                        <td  height="12">
                            Freya vom Rauberwe
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default Yava;