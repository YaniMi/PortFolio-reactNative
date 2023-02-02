import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';



const PortfolioPage = () => {
  return (
    
    <ScrollView>
    <View style={styles.container}>
    <ImageBackground 
    source ={{uri:'https://wallpapers.com/images/hd/iphone-13-blue-abstract-circles-w9tmwfgwmwzzzwb1.jpg'}}
    style={styles.backgroundimage}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mon Portfolio</Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://thumbs.dreamstime.com/b/d%C3%A9veloppeur-web-busy-working-116658678.jpg'}}
        />
        <Text style={styles.name}>Yani Mira</Text>
        <Text style={styles.bio}>
          Je suis développeur web et mobile avec plusieurs années d'expérience. J'aime travailler sur des projets stimulants et créatifs.
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://media.istockphoto.com/id/1057690406/fr/photo/chef-de-projet-rencontre-avec-l%C3%A9quipe-de-d%C3%A9cision-relative-%C3%A0-la-planification-des-jalons-et.jpg?s=1024x1024&w=is&k=20&c=vf_QoqEe81AR4ZpPEHdJVW6X-3lduGcskHHUglKC2PM='}}
        />
        <Text style={styles.name}>Mes Projets</Text>
        <Text style={styles.bio}>
          J'ai travaillé sur plusieurs projets au cours de ma carrière, vous trouverez en bas chacun 
          des projets sur lesquels j'ai travaillé.
        </Text>
      </View>
      
      <View style={styles.projets}>
        <ScrollView horizontal>
        <Image style={styles.imagesprojets}
        source={{uri: 'https://lareclame-scanbook.s3.amazonaws.com/51423216168-realisation-fancybox.jpg?width=auto'}}
        />
        <Image style={styles.imagesprojets}
        source={{uri: 'https://www.numerama.com/wp-content/uploads/2019/01/bnp-paribas.jpg'}}
        />
        <Image style={styles.imagesprojets}
        source={{uri: 'https://i.ytimg.com/vi/sT8GLVIElw0/maxresdefault.jpg'}}
        />
        <Image style={styles.imagesprojets}
        source={{uri: 'http://espace-client.net/wp-content/images/maaf.jpg'}}
        />
        <Image style={styles.imagesprojets}
        source={{uri: 'https://www.lsa-conso.fr/mediatheque/1/8/9/000307981_896x598_c.png'}}
        />
        </ScrollView>
      </View>
      <View style={styles.compétences}>
        <Text style={styles.compétences}>A venir
        </Text>
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#64b7f6',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    marginTop: 30,
  },
  backgroundimage :{

  },
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  projets: {
    marginBottom : 20,
  },
  imagesprojets: {
    width: 120,
    height: 120,
    marginLeft: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color : 'white',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    color : 'white',
  },
});

export default PortfolioPage;