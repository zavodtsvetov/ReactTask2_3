import s from "./App.module.css";
import { useState } from "react";
function App() {
	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	const [operand1, setOperand1] = useState("");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");
	const [res, setRes] = useState("");

	// блок кнопки Сброса при пустом дисплее + блок кнопки '=', если нет operand2
	const [disabledClean, setDisabledClean] = useState(true);
	const [disabledRes, setDisabledRes] = useState(true);

	const handleNum = (value) => {
		if (!operator) {
			setOperand1((up1) => up1 + value);
		} else {
			setOperand2((up1) => up1 + value);
			setDisabledRes(false);
		}
		setDisabledClean(false);
	};
	const handleClean = () => {
		setOperand1("");
		setOperator("");
		setOperand2("");
		setRes("");
		setDisabledClean(true);
		setDisabledRes(true);
	};
	const handlePlus = () => {
		if (res) {
			setOperand1(res);
			setOperand2("");
			setRes("");
			setOperator("+");
		} else {
			setOperator("+");
		}
	};
	const handleMinus = () => {
		if (res) {
			setOperand1(res);
			setOperand2("");
			setRes("");
			setOperator("-");
		} else {
			setOperator("-");
		}
	};
	const handleResult = () => {
		if (operator === "+") {
			setRes(Number(operand1) + Number(operand2));
		} else if (operator === "-") {
			setRes(Number(operand1) - Number(operand2));
		}
	};

	return (
		<>
			<div className={s.mainContainer + " " + s.intel}>
				Intel 2025
				<p> CASIO</p>
				<div className={s.showResult + " " + (res ? s.res : s.noRes)}>
					{operand1 + operator + operand2}
					{res ? "=" + res : ""}
				</div>
				<div className={s.allButtons}>
					{NUMS.map((num) => (
						<button
							onClick={() => handleNum(num)}
							className={s.button}
						>
							{Number(num)}
						</button>
					))}
					<button
						disabled={disabledClean}
						onClick={handlePlus}
						className={s.button}
					>
						+
					</button>
					<button
						disabled={disabledClean}
						onClick={handleMinus}
						className={s.button}
					>
						-
					</button>
					<button
						disabled={disabledClean}
						onClick={handleClean}
						className={s.button + " " + s.clean}
					>
						C
					</button>
					<button
						onClick={handleResult}
						className={s.button + " " + s.result}
						disabled={disabledRes}
					>
						=
					</button>
				</div>
			</div>
		</>
	);
}
export default App;
