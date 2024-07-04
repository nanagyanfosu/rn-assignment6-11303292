# rn-assignment6-11303292

# project implementation
This is a react-native project for a shopping app, in which a user can select an item, add it to the cart & also remove it from the cart. I used the logo and images found in the assets folder and applied touchable opacity to each so they are all clickable. Then, I created a ProductCard component to house the individual items on sale & designed each. I used AsyncStorage as my local storage for all items added to the cart. The handleAddToCart function specifically did this job. It uses useEffect to load the cart from AsyncStorage and saves the updated cart when an item is added to the cart. Also, as a user removes items from the cart, the Est. Total also reduces.

# screenshots
![image](https://github.com/nanagyanfosu/rn-assignment6-11303292/assets/125629455/5bef9473-9d58-4c58-8c38-9a8907034711)

![Screenshot_1720049693](https://github.com/nanagyanfosu/rn-assignment6-11303292/assets/125629455/5b3f763e-7b3d-4544-a653-303d6442af6d)

![Screenshot_1720049705](https://github.com/nanagyanfosu/rn-assignment6-11303292/assets/125629455/069f4656-7be3-4094-9369-05cff3629b25)

![Screenshot_1720049713](https://github.com/nanagyanfosu/rn-assignment6-11303292/assets/125629455/66189af7-ff69-420b-82be-30a9943f5bef)
