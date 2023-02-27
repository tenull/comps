import Accordion from "../components/Accordion"


function AccordionPage(){
    const items = [
        {
            id:1,
            label: 'can i use react',
            content:'blablablablablablablab lablablablablablab ablablablab lablablabla'
        },
        {
            id:2,
            label: 'can i use java',
            content:'blablasdasdablablablas dasdablablabla dablablablasd sdab lablablasdasdablablablasdasdablablablasdasdablablablasdasdablablablasdasdabla'
        },
        {
            id:3,
            label: 'can i use abada',
            content:'asd s lablablaasd s lablablaasd s lablablaasd s lablablaasd s lablablaasd s lablabla'
        }
    ]

 return (
    <div>
        
    <Accordion items={items} />
    </div>
 )
 
}

export default AccordionPage