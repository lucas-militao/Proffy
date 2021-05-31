import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://www.estrelando.com.br/uploads/2021/03/18/khloe-kardashian-1616098068.jpg",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Kloe Kardashian</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Irmã mais nova de Kourtney Kardashian e Kim Kardashian
        {"\n"}
        {"\n"}
        Khloé Alexandra Kardashian é uma personalidade de televisão e da mídia,
        empresária, modelo, apresentadora, instagrammer, escritora e autora,
        digital influencer, atriz, produtora, estilista e socialite
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"  "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
