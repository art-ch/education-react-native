import { View, Text } from 'react-native';

import globalStyles from '../../styles/global';

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Tech Otaku Save The World</Text>
      <Text style={globalStyles.paragraph}>
        Dango cosplay manga takoyaki mecha panties senpai seinan hikikomori desu
        iie cherry blossom loli grave of the fireflies anime. Iie chibi loli dub
        honorifics loli seinan erogi cosplay nekomimi ghost in the shell seinan
        baka totoro ecchi. Uke oniisan tea honorifics mecha weeaboo nekomimi dub
        baka sake mothra. Lolicon hai manga seme tea sakura your name loli
        pokemon otaku loli manga. Otaku totoro takoyaki senpai green tea
        inuyasha ova mangaka anime onigiri onigiri.
      </Text>
    </View>
  );
};

export default About;
