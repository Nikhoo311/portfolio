const variants = {
    open: {
        transition: {
            staggeredChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggeredChildren: 0.05,
            staggeredDirection: -1
        }
    }
}

const Links = () => {
    const items = [
        "Acceuil",
        "Compétences",
        "Projets",
        "Contact"
    ]

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
        <div className="links">{items.map(item => {
            const formatedItem = replaceAccent(item);
            return <a href={`#${formatedItem}`} key={item}>{item}</a>
        })}</div>
    )
}
export default Links;