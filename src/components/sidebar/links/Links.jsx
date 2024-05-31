import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = ({setOpen}) => {
    const items = ["Accueil", "Compétences", "Projets", "Contact"]

    function replaceAccent(s){
        let r = s.toLowerCase();
        
        r = r.replace(new RegExp(/[ ]/g),"");

        r = r.replace(new RegExp(/[àáâãäå]/g),"a");
        r = r.replace(new RegExp(/æ/g),"ae");
        r = r.replace(new RegExp(/ç/g),"c");
        r = r.replace(new RegExp(/[èéêë]/g),"e");
        r = r.replace(new RegExp(/[ìíîï]/g),"i");
        r = r.replace(new RegExp(/ñ/g),"n");                
        r = r.replace(new RegExp(/[òóôõö]/g),"o");
        r = r.replace(new RegExp(/œ/g),"oe");
        r = r.replace(new RegExp(/[ùúûü]/g),"u");
        r = r.replace(new RegExp(/[ýÿ]/g),"y");
        return r;
    }

    return (
        <motion.div className="links" variants={variants}>{items.map(item => {
            const formatedItem = replaceAccent(item);
            return <motion.a onClick={() => setOpen((prev) => !prev)} href={`#${formatedItem}`} key={item} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
        })}</motion.div>
    )
}
export default Links;