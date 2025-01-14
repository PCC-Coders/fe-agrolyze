import CardContent from "./CardContent";
import data from "./CardData";

export default function CardDiscussion() {
    return (
        <div className="space-y-4">
            {data.map((item, index) => (
                <div key={index} className="bg-agro-light-gray p-4 rounded-lg shadow-md max-w-3xl">
                    <CardContent {...item} />
                </div>
            ))}
        </div>
    );
}
