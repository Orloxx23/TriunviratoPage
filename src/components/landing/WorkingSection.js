import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from '../../components/landing/StatusCard';
import Logo from '../../assets/img/logoText.jpg';
import Logo2 from '../../assets/img/logo.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard
                        color="blueGray"
                        icon="groups"
                        title="Conoce"
                    >

                    </StatusCard>
                    <StatusCard
                        color="blueGray"
                        icon="gamepad"
                        title="Juega"
                    >

                    </StatusCard>
                    <StatusCard
                        color="blueGray"
                        icon="flag"
                        title="Compite"
                    >

                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Unete a la comunidad</H4>
                        <LeadText color="blueGray">
                            Comunidad Valorant en español es un espacio para compartir experiencias y conocimientos sobre el juego.
                            Hagamos entre todos una comunidad sana y disfrutemos de este magnifico juego.
                        </LeadText>
                        <LeadText color="blueGray">
                            Conoce, juega y compite
                        </LeadText>
                        <a
                            href="https://discord.com/invite/MptD8AyJwp?utm_source=Discord%20Widget&utm_medium=Connect"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Unirse
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        {/* <Card> */}
                            {/* <CardImage alt="Card Image" src={Logo2} /> */}
                                <iframe src="https://discord.com/widget?id=612349868182077462&theme=light" width="650" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        {/* </Card> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
