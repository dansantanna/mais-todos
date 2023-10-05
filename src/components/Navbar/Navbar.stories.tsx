import Text from "components/Text";
import Navbar, { NavbarProps } from ".";

export default {
  title: "components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    currentRoute: "/",
    items: [
      { text: "Produtos", route: "/" },
      { text: "Carrrinho", route: "/cart" },
    ],
  },
};

export const Component = (args: NavbarProps) => {
  return (
    <>
      <Navbar {...args} />
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        viverra id nulla sit amet mattis. Vivamus nec tempor libero. Nunc
        sodales diam et viverra lacinia. Quisque faucibus, elit ac cursus
        vestibulum, mi augue condimentum quam, et feugiat velit magna ut velit.
        Aliquam sed dictum orci. Ut ultrices tellus id augue auctor imperdiet.
        Nunc rhoncus tincidunt sem, vitae euismod orci sodales a. Donec
        elementum imperdiet justo, ut pretium arcu semper non. Nullam semper
        magna eget tortor vulputate semper. Donec aliquet felis sem, tempus
        condimentum augue congue nec.
      </Text>
      <Text as="p">
        Suspendisse potenti. Proin justo enim, auctor ut ullamcorper et,
        pharetra ut elit. Integer at dictum nunc, id rhoncus est. Vivamus erat
        lorem, rutrum at est vitae, mattis efficitur sapien. In hac habitasse
        platea dictumst. Nam quis nisi accumsan, dictum felis semper,
        scelerisque felis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </Text>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sodales odio vel libero pretium, sed venenatis justo luctus. Duis
        tincidunt vitae magna ut consectetur. Pellentesque consequat aliquam
        tellus, eget luctus ante pulvinar ac. Curabitur sit amet iaculis magna,
        non elementum tortor. Mauris placerat ex et ultrices mollis. Duis quis
        massa sed orci gravida dapibus eu ut eros. Nunc sed elit in neque
        sollicitudin euismod quis ac augue. Cras faucibus magna eu luctus
        porttitor. Donec sodales scelerisque lobortis. Morbi egestas dictum
        nulla, id sollicitudin eros tincidunt sed.
      </Text>
      <Text as="p">
        Phasellus ut aliquet mauris. Donec non tincidunt leo. In rutrum accumsan
        urna, quis pretium elit varius vitae. Vestibulum quis quam eget est
        semper hendrerit quis condimentum dolor. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nunc
        id varius nunc, id blandit ligula. Ut convallis convallis nibh. Nulla
        facilisi. Nunc ac eleifend est. Donec pharetra lacus non porttitor
        facilisis. Morbi fringilla nibh sit amet erat tristique, sit amet
        fringilla tortor aliquet. Curabitur ac dui in mauris viverra gravida.
        Vestibulum aliquam mattis enim, in commodo magna suscipit sed. Proin
        elementum eu quam id dapibus. Morbi ornare enim et enim bibendum
        feugiat.
      </Text>
      <Text as="p">
        Praesent ullamcorper varius sem a ultrices. Nullam libero ipsum,
        efficitur vitae tortor vitae, tincidunt fringilla mi. Vestibulum congue
        ut nunc quis aliquet. Ut est leo, egestas nec augue sit amet, pretium
        cursus purus. Nulla pharetra dapibus luctus. Aenean auctor erat quis
        tristique commodo. Donec gravida fermentum augue a mollis. Phasellus ut
        condimentum lorem. In hac habitasse platea dictumst.
      </Text>
      <Text as="p">
        Quisque a tempor leo, sed feugiat urna. Ut lacinia ornare arcu.
        Curabitur blandit sapien vitae lorem sodales, a tempus orci tincidunt.
        Mauris sodales ante ullamcorper nisi semper auctor. Mauris convallis,
        dui id pellentesque pellentesque, libero quam varius sem, nec accumsan
        massa sapien vel sapien. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Curabitur suscipit sapien vel
        sem vulputate vulputate. Vestibulum tincidunt congue tellus at
        vestibulum. Sed imperdiet placerat nisl, sed iaculis massa tincidunt
        varius. Donec imperdiet fermentum tincidunt. Vivamus pellentesque turpis
        diam, nec varius mi feugiat vitae. Nulla suscipit augue sed dui
        interdum, ac fermentum nulla pulvinar. Pellentesque sem justo, pulvinar
        non scelerisque in, iaculis quis elit. Aliquam congue est id orci
        facilisis efficitur. Vivamus at vehicula urna. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
      </Text>
      <Text as="p">
        Proin consequat, mi quis lobortis elementum, enim tellus ullamcorper
        urna, quis ultrices ex nulla pellentesque ligula. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla a ex urna. Maecenas pulvinar in orci pellentesque varius.
        Phasellus iaculis dui ut quam aliquam, sed molestie risus finibus. In
        sollicitudin, libero vel tincidunt cursus, lacus nunc pretium erat, eu
        ullamcorper dolor dui hendrerit erat. Vivamus libero nisi, vestibulum
        vitae elit sed, molestie blandit nunc.
      </Text>
      <Text as="p">
        Mauris a neque sit amet tellus lobortis imperdiet eget vitae sem. Nam
        enim nisi, elementum at enim a, imperdiet porta ipsum. Vivamus ac augue
        id est posuere dapibus vel quis risus. Nullam iaculis risus nec sem
        euismod, eget luctus elit porttitor. Donec eleifend justo ut est semper
        sodales. Quisque malesuada in odio et consectetur. Curabitur ullamcorper
        tempor felis, condimentum posuere lectus imperdiet eget. Integer id
        purus mollis, congue diam non, posuere libero. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas sed dui at augue ultrices semper vitae eget augue. Duis magna
        ipsum, iaculis ac nisl a, tempus pharetra felis. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nulla convallis scelerisque est, quis porttitor lacus mattis quis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </Text>
      <Text as="p">
        Etiam sollicitudin ante in mauris porta, eget aliquet nisi posuere.
        Maecenas aliquam cursus mauris, a consequat leo commodo accumsan. Etiam
        ullamcorper dignissim facilisis. Proin sit amet lorem facilisis,
        imperdiet nisl ac, venenatis quam. Sed vitae neque nec tellus volutpat
        tempus. Sed congue viverra lorem, ut finibus felis ultricies non. Nullam
        molestie nisi tellus, aliquam lacinia turpis luctus a. Sed ullamcorper
        imperdiet orci, id feugiat tellus placerat at. Sed convallis, est at
        tristique condimentum, mi mi porta velit, a malesuada erat nisi ac
        metus. Donec dolor metus, efficitur sit amet rutrum ut, rhoncus a diam.
        Phasellus suscipit malesuada lobortis. Etiam vehicula, sem at ultricies
        sodales, erat velit rutrum magna, eu malesuada elit lacus et sem.
        Quisque venenatis elit tincidunt aliquet pulvinar. Aenean ut pharetra
        ante. Cras molestie pulvinar purus ut lacinia. Nunc vulputate dui et
        tortor luctus ornare.
      </Text>
      <Text as="p">
        Curabitur in nisl eget elit ullamcorper varius in ac est. Etiam varius
        dui quis pellentesque luctus. Nam et nibh congue, rutrum felis tempus,
        fermentum metus. Integer laoreet, arcu eget commodo cursus, lorem nisl
        mollis orci, aliquet aliquam libero dui at ex. Cras gravida a risus ut
        porta. Nam pulvinar sem sit amet quam ultrices, sed iaculis odio
        convallis. Nunc nibh quam, feugiat ut tortor ac, lobortis euismod quam.
        Pellentesque malesuada suscipit sem, sed feugiat sapien maximus et.
        Proin lacinia convallis varius. Vivamus venenatis varius ligula non
        imperdiet. Nunc imperdiet libero leo, vel commodo velit bibendum vitae.
      </Text>
      <Text as="p">
        Nunc quis orci tempus, eleifend augue id, venenatis nisi. Etiam pulvinar
        lacus at nunc scelerisque, in pharetra odio finibus. Nullam vitae
        faucibus arcu, nec congue orci. Phasellus iaculis turpis molestie eros
        molestie, condimentum iaculis justo volutpat. Maecenas ut efficitur
        nulla. Sed ullamcorper, lectus in convallis luctus, lectus urna tempus
        nisi, eget lacinia sapien justo eu orci. Aenean in finibus libero, a
        fermentum mauris. Duis fermentum felis elit, in finibus risus vulputate
        at. Etiam vehicula eu nisl ut ultrices. Etiam elementum quam vitae urna
        condimentum rhoncus. Aenean maximus id leo luctus dapibus. Vestibulum
        venenatis enim bibendum risus venenatis, eget vulputate quam
        consectetur. Cras blandit fermentum tempor. Nam sit amet dignissim est,
        quis euismod metus. Cras lacinia sapien ac sapien tempor pellentesque.
      </Text>
      <Text as="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dolore
        iste, a veniam temporibus eius non mollitia! Vitae obcaecati illo
        laudantium quidem neque hic repellat, quibusdam vero et, saepe
        voluptatibus!
      </Text>
    </>
  );
};
