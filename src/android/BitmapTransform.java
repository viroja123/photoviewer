package com.sarriaroman.PhotoViewer;

import android.graphics.Bitmap;
import com.squareup.picasso.Transformation;

public class BitmapTransform implements Transformation {

    int maxWidth;
    int maxHeight;

    public BitmapTransform(int maxWidth, int maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
                Log.d("BitmapTransform", "BitmapTransform constructor called with maxWidth: " + maxWidth + " and maxHeight: " + maxHeight);
    }

    @Override
    public Bitmap transform(Bitmap source) {
                Log.d("BitmapTransform", "transform method called----------------------------->");
        int targetWidth, targetHeight;
        double aspectRatio;

        if (source.getWidth() > source.getHeight()) {
            targetWidth = (source.getWidth() > maxWidth) ? maxWidth : source.getWidth();
            aspectRatio = (double) source.getHeight() / (double) source.getWidth();
            targetHeight = (int) (targetWidth * aspectRatio);
        } else {
            targetHeight = (source.getHeight() > maxHeight) ? maxHeight : source.getHeight();
            aspectRatio = (double) source.getWidth() / (double) source.getHeight();
            targetWidth = (int) (targetHeight * aspectRatio);
        }

        Bitmap result = Bitmap.createScaledBitmap(source, targetWidth, targetHeight, false);
        if (result != source) {
            source.recycle();
        }
        return result;
    }

    @Override
    public String key() {
        return maxWidth + "x" + maxHeight;
    }
};
