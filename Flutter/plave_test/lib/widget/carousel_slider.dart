import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

import 'package:plave_test/model/model_movie.dart';

class CarouselImage extends StatefulWidget {
  final List<Movie> movies;

  CarouselImage(this.movies);

  _CarouselImageState createState() => _CarouselImageState();
}

class _CarouselImageState extends State<CarouselImage> {
  late List<Movie> movies;
  late List<String> title;
  late List<Widget> images;
  late List<String> keywords;
  late List<bool> likes;

  List<Color> colors = <Color>[Colors.purple, Colors.blue, Colors.pink, Colors.red, Colors.black];

  int _currentPage = 0;

  late String _currentTitle;
  late String _currentKeyword;
  late Color _currentColor;
  
  @override
  void initState() {
    super.initState();

    movies = widget.movies;
    title = movies.map((m) => m.title).toList();
    images = movies.map((m) => Image.asset(m.poster)).toList();
    keywords = movies.map((m) => m.keyword).toList();
    likes = movies.map((m) => m.like).toList();

    _currentTitle = title[0];
    _currentKeyword = keywords[0];
    _currentColor = colors[0];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(

        children: <Widget>[
          Container(
            padding: const EdgeInsets.all(20),
          ),

          CarouselSlider(
            items: images, 
            options: CarouselOptions(
              autoPlay: true,
              enlargeCenterPage: true,
              aspectRatio: 2.0,
              onPageChanged: (index, reason) {
                setState(() {
                  _currentPage = index;
                  _currentTitle = title[_currentPage];
                  _currentKeyword = keywords[_currentPage];
                  _currentColor = colors[_currentPage];
                });
              }
            ),
          ),

        Container(
            child: Row(
              children: [
                Text(_currentTitle),
                Icon(Icons.favorite, color: _currentColor,),
              ],
            ),
          ),
          
          Container(
            padding: const EdgeInsets.fromLTRB(0, 10, 0, 3),
            child: Text(_currentKeyword, style: const TextStyle(fontSize: 11),),
          ),

          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                likes[_currentPage] 
                  ? IconButton(onPressed: (){}, icon: const Icon(Icons.check))
                  : IconButton(onPressed: (){}, icon: const Icon(Icons.add)),

                const Text('내가 찜한 사진', style: TextStyle(fontSize: 11),),
              ],
            ),
          ),

          Container(
            padding: const EdgeInsets.only(right: 10),
            child: 
              TextButton(
                style: TextButton.styleFrom(
                  textStyle : const TextStyle(color: Colors.white) 
                ), 
                onPressed: () {},
                child: const Row(
                  children: <Widget>[
                    Icon(Icons.play_arrow, color: Colors.black,),
                    Padding(padding: EdgeInsets.all(3)),
                    Text('재생', style: TextStyle(color: Colors.black),)
                  ],
                ),
              ),
          ),

          Container(
            padding: const EdgeInsets.only(right: 10),
            child: Column(
              children: <Widget>[
                IconButton(onPressed: (){}, icon: const Icon(Icons.info),),
                const Text('정보', style: TextStyle(fontSize: 11),),
              ],
            ),
          ),

          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center, 
              children: makeIndicator(likes, _currentPage),     
            ),)
        ],

      ),

    );
  }
}

List<Widget> makeIndicator(List list, int _currentPage){
    List<Widget> results = [];

    for(var i = 0; i < list.length; i++){
      results.add(
        Container(
          width: 8,
          height: 8,
          margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 2),
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: _currentPage == i
              ? const Color.fromRGBO(255, 255, 255, .9)
              : const Color.fromRGBO(255, 255, 255, .4)
          ),
        )
      );
    }

    return results;
  }