import React from 'react';
import { View, Text, Image, Stylesheet, Button} from 'react-native';


const ProductItem = props => {
    return (
      <View styles={styles.product}>
        <Image style={styles.image} source={{url: props.image}}/>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>P{props.price.toFixed(2)}</Text>
        <View style={styles.actions}>
            <Button title="View Details"onPress={props.onViewDetail} />
            <Button title="To Cart" onPress={props.onAddToCart}/>
        </View>
       </View>
    );
};

const styles = Stylesheet.create ({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default ProductItem;