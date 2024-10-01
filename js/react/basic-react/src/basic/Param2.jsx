import { useSearchParams } from "react-router-dom";

const Param2 = () => {
    const [params] = useSearchParams();
    console.log(params.get("q"));

    return (
        <div className="param-page">
            <p>param {}</p>
        </div>
    );
}

export default Param2;
