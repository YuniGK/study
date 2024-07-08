import 'package:flutter/material.dart';
import 'package:plave_test/model/model_movie.dart';

class HomeScreen extends StatefulWidget {
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Movie> movies = [
    Movie.fromMap({
      'title' : '남예준',
      'keyword' : '1등 신랑감/예덩이/도베르만두/레드아이즈',
      'poster' : 'assets/images/yejun/plave_fancam.gif',
      'like' : false
    })
  ];

  @override
  Widget build(BuildContext context) {
    return TopBar();
  }
}

class TopBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(

      padding: EdgeInsets.fromLTRB(20, 7, 20, 7),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Image.asset(
            'assets/images/plave.png', 
            fit: BoxFit.contain, 
            height: 25,
          ),

          Container(
            padding: EdgeInsets.only(right: 1),
            child: Text(
              '멤버',
              style: TextStyle(fontSize: 14),
            ),
          ),

          Container(
            padding: EdgeInsets.only(right: 1),
            child: Text(
              '멤버 간 케미',
              style: TextStyle(fontSize: 14),
            ),
          ),

          Container(
            padding: EdgeInsets.only(right: 1),
            child: Text(
              '내가 찜한 사진',
              style: TextStyle(fontSize: 14),
            ),
          ),
        ],

      ),

    );

  }

}