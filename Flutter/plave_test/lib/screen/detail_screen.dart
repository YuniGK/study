import 'package:flutter/material.dart';
import 'dart:ui';
import 'package:plave_test/model/model_movie.dart';
 
class DetailScreen extends StatefulWidget {
  final Movie movie;

  DetailScreen(this.movie);

  @override
  State<DetailScreen> createState() => _DetailScreenState();
}

class _DetailScreenState extends State<DetailScreen> {
  bool like = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: Container(
      
        child: SafeArea(

          child: ListView(
            
            children: <Widget>[
              Stack(
                children: <Widget>[

                  Container(
                    width: double.maxFinite,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage(widget.movie.poster),
                        fit: BoxFit.cover,
                      )
                    ),

                    child: ClipRRect(
                      child: BackdropFilter(
                        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                        child: Container(
                          alignment: Alignment.center,
                          color: Colors.black.withOpacity(0.1),
                          
                          child: Container(
                            child: Column(
                              children: <Widget>[

                                Container(
                                  padding: EdgeInsets.fromLTRB(0, 45, 0, 10),
                                  child: Image.asset(widget.movie.poster,),
                                  height: 300,
                                )
                              ],      
                            ),
                          ),
                        ),              
                      ),
                    ),
                  )
                ],
              ),

              /*
              makeMenuButton(

              ),
              */
            ],
          ),
        ),
      ),
    );
  }
}