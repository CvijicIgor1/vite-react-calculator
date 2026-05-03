import { useState } from "react";
import { kalkulator_racunica } from "./Logika";
import type { Operacije, Operacije_Rez } from "../Kalkulator_Tip/Operacije";
import "./Kalkulator.css";

export default function Kalkulator() {
    const [broj1, setBroj1] = useState("");
    const [broj2, setBroj2] = useState("");
    const [operacija, setOperacija] = useState<Operacije>("zbir");
    const [rezultat, setRezultat] = useState<Operacije_Rez | null>(null);

    const handleIzracunaj = () => {
        const num1 = parseFloat(broj1);
        const num2 = parseFloat(broj2);
        if (isNaN(num1) || isNaN(num2)) {
            setRezultat({ greska: "Greska" });
            return;
        }
        const res = kalkulator_racunica(num1, num2, operacija);
        setRezultat(res);
    };

    return (
        <div className="kalkulator">
            <div className="kalkulator-red">
                <input
                    type="text"
                    value={broj1}
                    onChange={(e) => setBroj1(e.target.value)}
                    placeholder="broj"/>
                <select value={operacija} onChange={(e) => setOperacija(e.target.value as Operacije)}>
                    <option value="zbir">+</option>
                    <option value="oduzimanje">-</option>
                    <option value="mnozenje">*</option>
                    <option value="deljenje">/</option>
                </select>
                <input
                    type="text"
                    value={broj2}
                    onChange={(e) => setBroj2(e.target.value)}
                    placeholder="broj"/>
                <span className="znak">=</span>
                <input
                    type="text"
                    className="rezultat-polje"
                    value={rezultat?.greska ? rezultat.greska : rezultat?.broj ?? ""}
                    readOnly
                    placeholder="rezultat"/>
            </div>

            <div className="greska"></div>
            <button className="dugme-izracunaj" onClick={handleIzracunaj}>IZRACUNAJ</button>
        </div>
    );
}