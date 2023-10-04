import FormLogin from "./formLogin";
import Image from "next/image";
import neo4jImage from "../../../../public/Neo4j-logo-color.svg"
import Footer from "@/components/Footer";


export const metadata = {
    title: "Login",
    description: "",
};

export default function Page() {
    return (
        <div className="bg-slate-600 flex flex-col justify-center items-center h-screen">
            <Image src={neo4jImage} alt="Neo4j Logo" width={120} height={45} />
            <div className="p-1 w-2/6 mt-4">
                <FormLogin />
            </div>
            <Footer />
        </div>

    )
}