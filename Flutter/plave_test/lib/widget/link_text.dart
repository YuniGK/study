import 'package:flutter/material.dart';

/* 참조 https://github.com/ehdwns980416/junkim-velog/commit/0746883d648cb8c5abcf971142b3a11bf2100bc9 */
class LinkText extends StatefulWidget {
  const LinkText({super.key});

  @override
  State<LinkText> createState() => _LinkTextState();
}

class _LinkTextState extends State<LinkText> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

class LinkTextItem {
  String text;//텍스트
  bool isLink;//링크 유무
  
  Function()? onTab;//링크 클릭 시 이벤트

  LinkTextItem(
    {
      required this.text,
      this.isLink = false,
      this.onTab,
    }
  );
}