import { EventEmitter } from "@angular/core";

export class CvService{
    public changeLangEvent = new EventEmitter<string>();
    public langSkills = { 
        title_de: "Fremdsprachen",
        title_en: "Languages",
        icon: "text-color",
        skills: [
            { 
                content_de: "Arabisch", 
                content_en: "Arabic", 
                width: "100%", 
                label_de: "Muttersprache", 
                label_en: "Native Language"
            },
            { 
                content_de: "Englisch", 
                content_en: "English", 
                width: "85%", 
                label_de: "Sehr Gut", 
                label_en: "Very Good"
            },
            { 
                content_de: "Deutsch", 
                content_en: "German", 
                width: "70%", 
                label_de: "Gut", 
                label_en: "Good"
            }
        ] 
    }
    public otherSkills = {
        title_de: "Weitere Kenntnisse",
        title_en: "Skills",
        icon: "book",
        skills: [
            { content_de: "HTML5", width: "100%" },
            { content_de: "CSS3", width: "95%" },
            { content_de: "Bootstrap", width: "95%" },
            { content_de: "jQuery", width: "90%" },
            { content_de: "JS ES6", width: "90%" },
            { content_de: "TypeScript", width: "85%" },
            { content_de: "Angular 6", width: "85%" },
            { content_de: "JSON", width: "90%" },
            { content_de: "MySQL", width: "95%" },
            { content_de: "PHP 7", width: "90%" },
            { content_de: "Laravel", width: "95%" },
            { content_de: "Git", width: "70%" },
        ]
    }
    public hobbies = [
        {
            content_de: "Fußball",
            content_en: "Football",
            imgSrc: "images/fussbal.png"
        },
        {
            content_de: "Musik",
            content_en: "Music",
            imgSrc: "images/music.png"
        },
        {
            content_de: "Reisen",
            content_en: "Travelling",
            imgSrc: "images/travel.png"
        }
    ]
    public educationItems = {
        title_de: 'Ausbildung',
        title_en: 'Eductation',
        icon: 'education',
        items: [
            {
                range_de: 'September 2018 – Januar 2019',
                range_en: 'September 2018 – January 2019',
                title_de: 'Weiterbildung zum Web Developer bei GFN Hamburg',
                title_en: 'Further education as Web Developer at GFN Hamburg',
                content_de: 'Zusatzqualifikation :',
                content_en: 'Additional Qualifications :',
                list: [
                    {
                        content_de:'Webmasters Europa zertifizierter JavaScript-Entwickler',
                        content_en:'Webmasters Europe Certified JavaScript Developer',
                    },
                    {
                        content_de:'Webmasters Europe zertifizierter PHP-Entwickler',
                        content_en:'Webmasters Europe Certified PHP Developer',
                        link: "/src/assets/certification/webmaster_php.pdf"
                    },
                ]

            },
            {
                range_de: 'April 2018 – August 2018',
                range_en: 'April 2018 – August 2018',
                title_de: 'Weiterbildung zum Web Developer bei CBW Hamburg',
                title_en: 'Further education as Web Developer at CBW Hamburg',
                content_de: 'Zusatzqualifikation :',
                content_en: 'Additional Qualifications :',
                list:[
                    {
                        content_de: 'Microsoftzertifizierung 70-480',
                        content_en: 'Microsoft Certification 70-480',
                        link: '/src/assets/certification/microsoft.pdf'
                    },
                    {
                        content_de: 'Zend PHP-zertifizierung',
                        content_en: 'Zend PHP Certification',
                        link: '/src/assets/certification/zend_certification.pdf'
                    },
                    {
                        content_de: 'CBW Zeugnis',
                        content_en: 'CBW Certificate',
                        link: '/src/assets/certification/cbw_certification.pdf'
                    },
                ]
            },
            {
                range_de: 'Januar 2018',
                range_en: 'January 2018',
                title_de: 'Deutsch B1 Prüfung bei IBH Hamburg',
                title_en: 'German B1 exam at IBH Hamburg',
                content_de: 'am 27 Januar habe ich die B1 Prüfung und mit 98.8% bestanden. <a href="/src/assets/certification/deutsch.pdf" target="_blank" style="color:rgb(50,100,130)"> Hier klicken für Zertifikat</a>',
                content_en: 'on January 27 I passed the B1 exam with 98.8%. <a href="/src/assets/certification/deutsch.pdf" target="_blank" [style]="color:rgb(50,100,130)"> Click here for certificate</a>'
            },
            {
                range_de: 'November 2016 – April 2017',
                range_en: 'November 2016 – April 2017',
                title_de: 'Deutsch Integrationskurs von A1 bis B1 bei IBH Hamburg',
                title_en: 'German integration course from A1 to B1 at IBH Hamburg',
                content_de: '',
                content_en: ''
            },
            {
                range_de: 'Oktober 2010 – Juli 2015',
                range_en: 'October 2010 - July 2015',
                title_de: 'Bachelorstudium in Informatik an der Assiutüniversität',
                title_en: 'Bachelor\'s Degree in Computer Science at Assiut University',
                content_de: 'Information System\'s Bachelor Degree',
                content_en: 'Informationssysteme Bachelor-Abschluss'
            },
            {
                range_de: 'Juli 2013 – November 2013',
                range_en: 'July 2013 - November 2013',
                title_de: 'Android Kurs in ITS (In Ägypten)',
                title_en: 'Android Course in ITS(In Egypt)',
                content_de: '',
                content_en: ''
            }
        ]
    }
    public jobItems = {
        title_de: 'Berufliche Laufbahn',
        title_en: 'Professional career',
        icon: 'briefcase',
        items: [
            {
                range_de: 'Mai 2018 – August 2018',
                range_en: 'May 2018 - August 2018',
                title_de: 'Zahnarzt Klinik Information System Ägypten',
                title_en: 'Dentist Clinic Information System Egypt',
                content_de: 'Selbständiger Web developer',
                content_en: 'Freelancer Web developer'
            },
            {
                range_de: 'September 2016 – Dez. 2017',
                range_en: 'September 2016 – Dec. 2017',
                title_de: 'Hanse Grill Restaurant Hamburg-Bergedorf',
                title_en: 'Hanse Grill Restaurant Hamburg-Bergedorf',
                content_de: 'Vollzeit Nebenjob während des Deutsch Integrationskurses.',
                content_en: 'part-time job during the german integration course.'
            },
            {
                range_de: 'Juni 2016 – Dezember 2016',
                range_en: 'June 2016 - December 2016',
                title_de: 'Baufirma System Ägypten',
                title_en: 'Construction company system Egypt',
                content_de: 'Selbstständiger Web Developer. <br> Das System handhabt alle Operationen zum Bau des Firmengebäudes.',
                content_en: 'Self-employed Web Developer. <br> The system handles all operations for the construction of the company\'s buildings.'
            },
            {
                range_de: 'Juni 2015 – Juli 2015',
                range_en: 'June 2015 – July 2015',
                title_de: 'Clinic Information System (Assiut Üniversität)',
                title_en: 'Clinic Information System (Assiut University)',
                content_de: 'Bachelorarbeit. <br>Das Clinic Information System ist eine Webanwendung, die es jedem Arzt ermöglicht, die Termine und alles über die Klinik zu verwalten. Der Patient kann diese Anwendung auch für die Reservierung und andere Dinge nutzen, um nach der richtigen Klinik zu suchen. Ich habe den größten Teil der Vorder- und Rückseite der Anwendung gemacht. Das Design der App vom Logo bis hin zu den gesamten Seiten wurde von mir entworfen, inspiriert von meinen eigenen Vorstellungen.',
                content_en: 'Clinic Information System is a web application that let any doctor manage the appointments and everything about the clinic, patient also use this application for reservation and other stuff likesearching for the right clinic. I made most of the front and back ends of the application, the designof the app from the logo to the whole pages is designed by me inspired by my own imaginations.'
            },
        ]
    }
    /*changeLang(){
        if(this.lang=="de"){
            this.lang = "en";
        }else{
            this.lang = "de";
        }
        localStorage.setItem('lang',this.lang);
    }*/
}