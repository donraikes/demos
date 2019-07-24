#!/bin/bash
DOCS=~/demos/docs
APP="tables"
ojet build web
DESTDIR=$DOCS/$APP
rm -fr $DESTDIR
mkdir -p $DESTDIR
pushd web
cp -r * $DESTDIR
popd
