import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());//app start
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo'
      , theme: ThemeData(
        primaryColor: Colors.white
      ),
      home: MyHome(),
    );
  }
}

class MyHome extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title : Text('title')//텍스트 추가
        ),
        body : ColoredBox(
          color: Colors.blue,

          child: 
            Row(
              children: <Widget>[
                Container(
                  color: Colors.yellow,
                  width: 100,
                  height: 100,
                ),

                Container(
                  color: Colors.red,
                  width: 100,
                  height: 100,
                  child: Center(
                    child: Icon(Icons.star),//아이콘 추가
                  )
                ),

                Container(
                  color: Colors.white,
                  width: 100,
                  height: 100,
                  child: Align(
                    alignment: Alignment.center,
                    child: Image.asset(//이미지 추가
                      'assets/images/plave.jpg',
                      width: 90,
                      height: 90,
                    ),
                  )
                )
              
              ],
            ),

        )  
    );
  }

}