#!/bin/bash
DOCS=~/demos/docs
APP=""
ojet build web
DESTDIR=$DOCS/$APP
mkdir -p $DESTDIR
pushd web
cp -r * $DESTDIR
popd
