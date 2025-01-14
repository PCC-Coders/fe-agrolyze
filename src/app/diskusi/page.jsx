import CreateDiscussion from "@/components/discussion/create";
import CardDiscussion from "@/components/discussion/card/Card";

export default function Diskusi() {
    return (
        <div className="py-2 px-10 md:px-12 lg:px-16 bg-agro-green min-h-screen flex flex-col items-center justify-center">
            {/* Create Discussion */}
            <div className="mb-3 md:mb-5 w-full max-w-3xl">
                <CreateDiscussion />
            </div>

            {/* Card Discussion */}
            <div className="h-[120vh] w-full max-w-3xl mr-2 overflow-y-auto space-y-6">
                <CardDiscussion />
                <CardDiscussion />
                <CardDiscussion />
            </div>
        </div>
    );
}
