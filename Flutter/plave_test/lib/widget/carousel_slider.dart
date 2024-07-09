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
  late List<Widget> images;
  late List<String> keywords;
  late List<bool> likes;

  int _currentPage = 0;
  late String _currentKeyword;

  @override
  void initState() {
    super.initState();

    movies = widget.movies;
    //images = movies.map((m) => Image.asset('assets/images/'+m.poster)).toList();
    images = movies.map((m) => Image.asset(m.poster)).toList();
    keywords = movies.map((m) => m.keyword).toList();
    likes = movies.map((m) => m.like).toList();
    _currentKeyword = keywords[0];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(

        children: <Widget>[
          Container(
            padding: EdgeInsets.all(20),
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
                  _currentKeyword = keywords[_currentPage];
                });
              }
            ),
          ),

          Container(
            child: Text(_currentKeyword),
          )
        ],

      ),

    );
  }
}