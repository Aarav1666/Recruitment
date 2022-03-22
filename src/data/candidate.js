const candidateList = [
    {"id":"1", "userName": "User 1", "phoneNumber": "9090909090", "address": "Address 1", "skills": "js,html,css"},
    {"id":"2", "userName": "User 2", "phoneNumber": "9090909090", "address": "Address 2", "skills": "js,css"},
    {"id":"3", "userName": "User 3", "phoneNumber": "9090909090", "address": "Address 3", "skills": "js,html"},
    {"id":"4", "userName": "User 4", "phoneNumber": "9090909090", "address": "Address 4", "skills": "html,css"},
    {"id":"5", "userName": "User 5", "phoneNumber": "9090909090", "address": "Address 5", "skills": "css"},
    {"id":"6", "userName": "User 6", "phoneNumber": "9090909090", "address": "Address 6", "skills": "js"},
    {"id":"7", "userName": "User 7", "phoneNumber": "9090909090", "address": "Address 7", "skills": "html"},
    {"id":"8", "userName": "User 8", "phoneNumber": "9090909090", "address": "Address 8", "skills": "js,html,css"},
    {"id":"9", "userName": "User 9", "phoneNumber": "9090909090", "address": "Address 9", "skills": "js,css"},
    {"id":"0", "userName": "User 0", "phoneNumber": "9090909090", "address": "Address 0", "skills": "js,html"},

    {"id":"a1", "userName": "User a1", "phoneNumber": "9090909090", "address": "Address a1", "skills": "js,html,css"},
    {"id":"a2", "userName": "User a2", "phoneNumber": "9090909090", "address": "Address a2", "skills": "js,css"},
    {"id":"a3", "userName": "User a3", "phoneNumber": "9090909090", "address": "Address a3", "skills": "js,html"},
    {"id":"a4", "userName": "User a4", "phoneNumber": "9090909090", "address": "Address a4", "skills": "html,css"},
    {"id":"a5", "userName": "User a5", "phoneNumber": "9090909090", "address": "Address a5", "skills": "css"},
    {"id":"a6", "userName": "User a6", "phoneNumber": "9090909090", "address": "Address a6", "skills": "js"},
    {"id":"a7", "userName": "User a7", "phoneNumber": "9090909090", "address": "Address a7", "skills": "html"},
    {"id":"a8", "userName": "User a8", "phoneNumber": "9090909090", "address": "Address a8", "skills": "js,html,css"},
    {"id":"a9", "userName": "User a9", "phoneNumber": "9090909090", "address": "Address a9", "skills": "js,css"},
    {"id":"a0", "userName": "User a0", "phoneNumber": "9090909090", "address": "Address a0", "skills": "js,html"},

    {"id":"b1", "userName": "User b1", "phoneNumber": "9090909090", "address": "Address b1", "skills": "js,html,css"},
    {"id":"b2", "userName": "User b2", "phoneNumber": "9090909090", "address": "Address b2", "skills": "js,css"},
    {"id":"b3", "userName": "User b3", "phoneNumber": "9090909090", "address": "Address b3", "skills": "js,html"},
    {"id":"b4", "userName": "User b4", "phoneNumber": "9090909090", "address": "Address b4", "skills": "html,css"},
    {"id":"b5", "userName": "User b5", "phoneNumber": "9090909090", "address": "Address b5", "skills": "css"},
    {"id":"b6", "userName": "User b6", "phoneNumber": "9090909090", "address": "Address b6", "skills": "js"},
    {"id":"b7", "userName": "User b7", "phoneNumber": "9090909090", "address": "Address b7", "skills": "html"},
    {"id":"b8", "userName": "User b8", "phoneNumber": "9090909090", "address": "Address b8", "skills": "js,html,css"},
    {"id":"b9", "userName": "User b9", "phoneNumber": "9090909090", "address": "Address b9", "skills": "js,css"},
    {"id":"b0", "userName": "User b0", "phoneNumber": "9090909090", "address": "Address b0", "skills": "js,html"},

    {"id":"c1", "userName": "User c1", "phoneNumber": "9090909090", "address": "Address c1", "skills": "js,html,css"},
    {"id":"c2", "userName": "User c2", "phoneNumber": "9090909090", "address": "Address c2", "skills": "js,css"},
    {"id":"c3", "userName": "User c3", "phoneNumber": "9090909090", "address": "Address c3", "skills": "js,html"},
    {"id":"c4", "userName": "User c4", "phoneNumber": "9090909090", "address": "Address c4", "skills": "html,css"},
    {"id":"c5", "userName": "User c5", "phoneNumber": "9090909090", "address": "Address c5", "skills": "css"},
    {"id":"c6", "userName": "User c6", "phoneNumber": "9090909090", "address": "Address c6", "skills": "js"},
    {"id":"c7", "userName": "User c7", "phoneNumber": "9090909090", "address": "Address c7", "skills": "html"},
    {"id":"c8", "userName": "User c8", "phoneNumber": "9090909090", "address": "Address c8", "skills": "js,html,css"},
    {"id":"c9", "userName": "User c9", "phoneNumber": "9090909090", "address": "Address c9", "skills": "js,css"},
    {"id":"c0", "userName": "User c0", "phoneNumber": "9090909090", "address": "Address c0", "skills": "js,html"},

    {"id":"d1", "userName": "User d1", "phoneNumber": "9090909090", "address": "Address d1", "skills": "js,html,css"},
    {"id":"d2", "userName": "User d2", "phoneNumber": "9090909090", "address": "Address d2", "skills": "js,css"},
    {"id":"d3", "userName": "User d3", "phoneNumber": "9090909090", "address": "Address d3", "skills": "js,html"},
    {"id":"d4", "userName": "User d4", "phoneNumber": "9090909090", "address": "Address d4", "skills": "html,css"},
    {"id":"d5", "userName": "User d5", "phoneNumber": "9090909090", "address": "Address d5", "skills": "css"},
    {"id":"d6", "userName": "User d6", "phoneNumber": "9090909090", "address": "Address d6", "skills": "js"},
    {"id":"d7", "userName": "User d7", "phoneNumber": "9090909090", "address": "Address d7", "skills": "html"},
    {"id":"d8", "userName": "User d8", "phoneNumber": "9090909090", "address": "Address d8", "skills": "js,html,css"},
    {"id":"d9", "userName": "User d9", "phoneNumber": "9090909090", "address": "Address d9", "skills": "js,css"},
    {"id":"d0", "userName": "User d0", "phoneNumber": "9090909090", "address": "Address d0", "skills": "js,html"},

    {"id":"e1", "userName": "User e1", "phoneNumber": "9090909090", "address": "Address e1", "skills": "js,html,css"},
    {"id":"e2", "userName": "User e2", "phoneNumber": "9090909090", "address": "Address e2", "skills": "js,css"},
    {"id":"e3", "userName": "User e3", "phoneNumber": "9090909090", "address": "Address e3", "skills": "js,html"},
    {"id":"e4", "userName": "User e4", "phoneNumber": "9090909090", "address": "Address e4", "skills": "html,css"},
    {"id":"e5", "userName": "User e5", "phoneNumber": "9090909090", "address": "Address e5", "skills": "css"},
    {"id":"e6", "userName": "User e6", "phoneNumber": "9090909090", "address": "Address e6", "skills": "js"},
    {"id":"e7", "userName": "User e7", "phoneNumber": "9090909090", "address": "Address e7", "skills": "html"},
    {"id":"e8", "userName": "User e8", "phoneNumber": "9090909090", "address": "Address e8", "skills": "js,html,css"},
    {"id":"e9", "userName": "User e9", "phoneNumber": "9090909090", "address": "Address e9", "skills": "js,css"},
    {"id":"e0", "userName": "User e0", "phoneNumber": "9090909090", "address": "Address e0", "skills": "js,html"},

    {"id":"f1", "userName": "User f1", "phoneNumber": "9090909090", "address": "Address f1", "skills": "js,html,css"},
    {"id":"f2", "userName": "User f2", "phoneNumber": "9090909090", "address": "Address f2", "skills": "js,css"},
    {"id":"f3", "userName": "User f3", "phoneNumber": "9090909090", "address": "Address f3", "skills": "js,html"},
    {"id":"f4", "userName": "User f4", "phoneNumber": "9090909090", "address": "Address f4", "skills": "html,css"},
    {"id":"f5", "userName": "User f5", "phoneNumber": "9090909090", "address": "Address f5", "skills": "css"},
    {"id":"f6", "userName": "User f6", "phoneNumber": "9090909090", "address": "Address f6", "skills": "js"},
    {"id":"f7", "userName": "User f7", "phoneNumber": "9090909090", "address": "Address f7", "skills": "html"},
    {"id":"f8", "userName": "User f8", "phoneNumber": "9090909090", "address": "Address f8", "skills": "js,html,css"},
    {"id":"f9", "userName": "User f9", "phoneNumber": "9090909090", "address": "Address f9", "skills": "js,css"},
    {"id":"f0", "userName": "User f0", "phoneNumber": "9090909090", "address": "Address f0", "skills": "js,html"},

    {"id":"g1", "userName": "User g1", "phoneNumber": "9090909090", "address": "Address g1", "skills": "js,html,css"},
    {"id":"g2", "userName": "User g2", "phoneNumber": "9090909090", "address": "Address g2", "skills": "js,css"},
    {"id":"g3", "userName": "User g3", "phoneNumber": "9090909090", "address": "Address g3", "skills": "js,html"},
    {"id":"g4", "userName": "User g4", "phoneNumber": "9090909090", "address": "Address g4", "skills": "html,css"},
    {"id":"g5", "userName": "User g5", "phoneNumber": "9090909090", "address": "Address g5", "skills": "css"},
    {"id":"g6", "userName": "User g6", "phoneNumber": "9090909090", "address": "Address g6", "skills": "js"},
    {"id":"g7", "userName": "User g7", "phoneNumber": "9090909090", "address": "Address g7", "skills": "html"},
    {"id":"g8", "userName": "User g8", "phoneNumber": "9090909090", "address": "Address g8", "skills": "js,html,css"},
    {"id":"g9", "userName": "User g9", "phoneNumber": "9090909090", "address": "Address g9", "skills": "js,css"},
    {"id":"g0", "userName": "User g0", "phoneNumber": "9090909090", "address": "Address g0", "skills": "js,html"},

    {"id":"h1", "userName": "User h1", "phoneNumber": "9090909090", "address": "Address h1", "skills": "js,html,css"},
    {"id":"h2", "userName": "User h2", "phoneNumber": "9090909090", "address": "Address h2", "skills": "js,css"},
    {"id":"h3", "userName": "User h3", "phoneNumber": "9090909090", "address": "Address h3", "skills": "js,html"},
    {"id":"h4", "userName": "User h4", "phoneNumber": "9090909090", "address": "Address h4", "skills": "html,css"},
    {"id":"h5", "userName": "User h5", "phoneNumber": "9090909090", "address": "Address h5", "skills": "css"},
    {"id":"h6", "userName": "User h6", "phoneNumber": "9090909090", "address": "Address h6", "skills": "js"},
    {"id":"h7", "userName": "User h7", "phoneNumber": "9090909090", "address": "Address h7", "skills": "html"},
    {"id":"h8", "userName": "User h8", "phoneNumber": "9090909090", "address": "Address h8", "skills": "js,html,css"},
    {"id":"h9", "userName": "User h9", "phoneNumber": "9090909090", "address": "Address h9", "skills": "js,css"},
    {"id":"h0", "userName": "User h0", "phoneNumber": "9090909090", "address": "Address h0", "skills": "js,html"},

    {"id":"i1", "userName": "User i1", "phoneNumber": "9090909090", "address": "Address i1", "skills": "js,html,css"},
    {"id":"i2", "userName": "User i2", "phoneNumber": "9090909090", "address": "Address i2", "skills": "js,css"},
    {"id":"i3", "userName": "User i3", "phoneNumber": "9090909090", "address": "Address i3", "skills": "js,html"},
    {"id":"i4", "userName": "User i4", "phoneNumber": "9090909090", "address": "Address i4", "skills": "html,css"},
    {"id":"i5", "userName": "User i5", "phoneNumber": "9090909090", "address": "Address i5", "skills": "css"},
    {"id":"i6", "userName": "User i6", "phoneNumber": "9090909090", "address": "Address i6", "skills": "js"},
    {"id":"i7", "userName": "User i7", "phoneNumber": "9090909090", "address": "Address i7", "skills": "html"},
    {"id":"i8", "userName": "User i8", "phoneNumber": "9090909090", "address": "Address i8", "skills": "js,html,css"},
    {"id":"i9", "userName": "User i9", "phoneNumber": "9090909090", "address": "Address i9", "skills": "js,css"},
    {"id":"i0", "userName": "User i0", "phoneNumber": "9090909090", "address": "Address i0", "skills": "js,html"},

    {"id":"j1", "userName": "User j1", "phoneNumber": "9090909090", "address": "Address j1", "skills": "js,html,css"},
    {"id":"j2", "userName": "User j2", "phoneNumber": "9090909090", "address": "Address j2", "skills": "js,css"},
    {"id":"j3", "userName": "User j3", "phoneNumber": "9090909090", "address": "Address j3", "skills": "js,html"},
    {"id":"j4", "userName": "User j4", "phoneNumber": "9090909090", "address": "Address j4", "skills": "html,css"},
    {"id":"j5", "userName": "User j5", "phoneNumber": "9090909090", "address": "Address j5", "skills": "css"},
    {"id":"j6", "userName": "User j6", "phoneNumber": "9090909090", "address": "Address j6", "skills": "js"},
    {"id":"j7", "userName": "User j7", "phoneNumber": "9090909090", "address": "Address j7", "skills": "html"},
    {"id":"j8", "userName": "User j8", "phoneNumber": "9090909090", "address": "Address j8", "skills": "js,html,css"},
    {"id":"j9", "userName": "User j9", "phoneNumber": "9090909090", "address": "Address j9", "skills": "js,css"},
    {"id":"j0", "userName": "User j0", "phoneNumber": "9090909090", "address": "Address j0", "skills": "js,html"},

    {"id":"k1", "userName": "User k1", "phoneNumber": "9090909090", "address": "Address k1", "skills": "js,html,css"},
    {"id":"k2", "userName": "User k2", "phoneNumber": "9090909090", "address": "Address k2", "skills": "js,css"},
    {"id":"k3", "userName": "User k3", "phoneNumber": "9090909090", "address": "Address k3", "skills": "js,html"},
    {"id":"k4", "userName": "User k4", "phoneNumber": "9090909090", "address": "Address k4", "skills": "html,css"},
    {"id":"k5", "userName": "User k5", "phoneNumber": "9090909090", "address": "Address k5", "skills": "css"},
    {"id":"k6", "userName": "User k6", "phoneNumber": "9090909090", "address": "Address k6", "skills": "js"},
    {"id":"k7", "userName": "User k7", "phoneNumber": "9090909090", "address": "Address k7", "skills": "html"},
    {"id":"k8", "userName": "User k8", "phoneNumber": "9090909090", "address": "Address k8", "skills": "js,html,css"},
    {"id":"k9", "userName": "User k9", "phoneNumber": "9090909090", "address": "Address k9", "skills": "js,css"},
    {"id":"k0", "userName": "User k0", "phoneNumber": "9090909090", "address": "Address k0", "skills": "js,html"},

    {"id":"l1", "userName": "User l1", "phoneNumber": "9090909090", "address": "Address l1", "skills": "js,html,css"},
    {"id":"l2", "userName": "User l2", "phoneNumber": "9090909090", "address": "Address l2", "skills": "js,css"},
    {"id":"l3", "userName": "User l3", "phoneNumber": "9090909090", "address": "Address l3", "skills": "js,html"},
    {"id":"l4", "userName": "User l4", "phoneNumber": "9090909090", "address": "Address l4", "skills": "html,css"},
    {"id":"l5", "userName": "User l5", "phoneNumber": "9090909090", "address": "Address l5", "skills": "css"},
    {"id":"l6", "userName": "User l6", "phoneNumber": "9090909090", "address": "Address l6", "skills": "js"},
    {"id":"l7", "userName": "User l7", "phoneNumber": "9090909090", "address": "Address l7", "skills": "html"},
    {"id":"l8", "userName": "User l8", "phoneNumber": "9090909090", "address": "Address l8", "skills": "js,html,css"},
    {"id":"l9", "userName": "User l9", "phoneNumber": "9090909090", "address": "Address l9", "skills": "js,css"},
    {"id":"l0", "userName": "User l0", "phoneNumber": "9090909090", "address": "Address l0", "skills": "js,html"},

    {"id":"m1", "userName": "User m1", "phoneNumber": "9090909090", "address": "Address m1", "skills": "js,html,css"},
    {"id":"m2", "userName": "User m2", "phoneNumber": "9090909090", "address": "Address m2", "skills": "js,css"},
    {"id":"m3", "userName": "User m3", "phoneNumber": "9090909090", "address": "Address m3", "skills": "js,html"},
    {"id":"m4", "userName": "User m4", "phoneNumber": "9090909090", "address": "Address m4", "skills": "html,css"},
    {"id":"m5", "userName": "User m5", "phoneNumber": "9090909090", "address": "Address m5", "skills": "css"},
    {"id":"m6", "userName": "User m6", "phoneNumber": "9090909090", "address": "Address m6", "skills": "js"},
    {"id":"m7", "userName": "User m7", "phoneNumber": "9090909090", "address": "Address m7", "skills": "html"},
    {"id":"m8", "userName": "User m8", "phoneNumber": "9090909090", "address": "Address m8", "skills": "js,html,css"},
    {"id":"m9", "userName": "User m9", "phoneNumber": "9090909090", "address": "Address m9", "skills": "js,css"},
    {"id":"m0", "userName": "User m0", "phoneNumber": "9090909090", "address": "Address m0", "skills": "js,html"},

    {"id":"n1", "userName": "User n1", "phoneNumber": "9090909090", "address": "Address n1", "skills": "js,html,css"},
    {"id":"n2", "userName": "User n2", "phoneNumber": "9090909090", "address": "Address n2", "skills": "js,css"},
    {"id":"n3", "userName": "User n3", "phoneNumber": "9090909090", "address": "Address n3", "skills": "js,html"},
    {"id":"n4", "userName": "User n4", "phoneNumber": "9090909090", "address": "Address n4", "skills": "html,css"},
    {"id":"n5", "userName": "User n5", "phoneNumber": "9090909090", "address": "Address n5", "skills": "css"},
    {"id":"n6", "userName": "User n6", "phoneNumber": "9090909090", "address": "Address n6", "skills": "js"},
    {"id":"n7", "userName": "User n7", "phoneNumber": "9090909090", "address": "Address n7", "skills": "html"},
    {"id":"n8", "userName": "User n8", "phoneNumber": "9090909090", "address": "Address n8", "skills": "js,html,css"},
    {"id":"n9", "userName": "User n9", "phoneNumber": "9090909090", "address": "Address n9", "skills": "js,css"},
    {"id":"n0", "userName": "User n0", "phoneNumber": "9090909090", "address": "Address n0", "skills": "js,html"},

    {"id":"o1", "userName": "User o1", "phoneNumber": "9090909090", "address": "Address o1", "skills": "js,html,css"},
    {"id":"o2", "userName": "User o2", "phoneNumber": "9090909090", "address": "Address o2", "skills": "js,css"},
    {"id":"o3", "userName": "User o3", "phoneNumber": "9090909090", "address": "Address o3", "skills": "js,html"},
    {"id":"o4", "userName": "User o4", "phoneNumber": "9090909090", "address": "Address o4", "skills": "html,css"},
    {"id":"o5", "userName": "User o5", "phoneNumber": "9090909090", "address": "Address o5", "skills": "css"},
    {"id":"o6", "userName": "User o6", "phoneNumber": "9090909090", "address": "Address o6", "skills": "js"},
    {"id":"o7", "userName": "User o7", "phoneNumber": "9090909090", "address": "Address o7", "skills": "html"},
    {"id":"o8", "userName": "User o8", "phoneNumber": "9090909090", "address": "Address o8", "skills": "js,html,css"},
    {"id":"o9", "userName": "User o9", "phoneNumber": "9090909090", "address": "Address o9", "skills": "js,css"},
    {"id":"o0", "userName": "User o0", "phoneNumber": "9090909090", "address": "Address o0", "skills": "js,html"},

    {"id":"p1", "userName": "User p1", "phoneNumber": "9090909090", "address": "Address p1", "skills": "js,html,css"},
    {"id":"p2", "userName": "User p2", "phoneNumber": "9090909090", "address": "Address p2", "skills": "js,css"},
    {"id":"p3", "userName": "User p3", "phoneNumber": "9090909090", "address": "Address p3", "skills": "js,html"},
    {"id":"p4", "userName": "User p4", "phoneNumber": "9090909090", "address": "Address p4", "skills": "html,css"},
    {"id":"p5", "userName": "User p5", "phoneNumber": "9090909090", "address": "Address p5", "skills": "css"},
    {"id":"p6", "userName": "User p6", "phoneNumber": "9090909090", "address": "Address p6", "skills": "js"},
    {"id":"p7", "userName": "User p7", "phoneNumber": "9090909090", "address": "Address p7", "skills": "html"},
    {"id":"p8", "userName": "User p8", "phoneNumber": "9090909090", "address": "Address p8", "skills": "js,html,css"},
    {"id":"p9", "userName": "User p9", "phoneNumber": "9090909090", "address": "Address p9", "skills": "js,css"},
    {"id":"p0", "userName": "User p0", "phoneNumber": "9090909090", "address": "Address p0", "skills": "js,html"},

    {"id":"q1", "userName": "User q1", "phoneNumber": "9090909090", "address": "Address q1", "skills": "js,html,css"},
    {"id":"q2", "userName": "User q2", "phoneNumber": "9090909090", "address": "Address q2", "skills": "js,css"},
    {"id":"q3", "userName": "User q3", "phoneNumber": "9090909090", "address": "Address q3", "skills": "js,html"},
    {"id":"q4", "userName": "User q4", "phoneNumber": "9090909090", "address": "Address q4", "skills": "html,css"},
    {"id":"q5", "userName": "User q5", "phoneNumber": "9090909090", "address": "Address q5", "skills": "css"},
    {"id":"q6", "userName": "User q6", "phoneNumber": "9090909090", "address": "Address q6", "skills": "js"},
    {"id":"q7", "userName": "User q7", "phoneNumber": "9090909090", "address": "Address q7", "skills": "html"},
    {"id":"q8", "userName": "User q8", "phoneNumber": "9090909090", "address": "Address q8", "skills": "js,html,css"},
    {"id":"q9", "userName": "User q9", "phoneNumber": "9090909090", "address": "Address q9", "skills": "js,css"},
    {"id":"q0", "userName": "User q0", "phoneNumber": "9090909090", "address": "Address q0", "skills": "js,html"},

    {"id":"r1", "userName": "User r1", "phoneNumber": "9090909090", "address": "Address r1", "skills": "js,html,css"},
    {"id":"r2", "userName": "User r2", "phoneNumber": "9090909090", "address": "Address r2", "skills": "js,css"},
    {"id":"r3", "userName": "User r3", "phoneNumber": "9090909090", "address": "Address r3", "skills": "js,html"},
    {"id":"r4", "userName": "User r4", "phoneNumber": "9090909090", "address": "Address r4", "skills": "html,css"},
    {"id":"r5", "userName": "User r5", "phoneNumber": "9090909090", "address": "Address r5", "skills": "css"},
    {"id":"r6", "userName": "User r6", "phoneNumber": "9090909090", "address": "Address r6", "skills": "js"},
    {"id":"r7", "userName": "User r7", "phoneNumber": "9090909090", "address": "Address r7", "skills": "html"},
    {"id":"r8", "userName": "User r8", "phoneNumber": "9090909090", "address": "Address r8", "skills": "js,html,css"},
    {"id":"r9", "userName": "User r9", "phoneNumber": "9090909090", "address": "Address r9", "skills": "js,css"},
    {"id":"r0", "userName": "User r0", "phoneNumber": "9090909090", "address": "Address r0", "skills": "js,html"},

    {"id":"s1", "userName": "User s1", "phoneNumber": "9090909090", "address": "Address s1", "skills": "js,html,css"},
    {"id":"s2", "userName": "User s2", "phoneNumber": "9090909090", "address": "Address s2", "skills": "js,css"},
    {"id":"s3", "userName": "User s3", "phoneNumber": "9090909090", "address": "Address s3", "skills": "js,html"},
    {"id":"s4", "userName": "User s4", "phoneNumber": "9090909090", "address": "Address s4", "skills": "html,css"},
    {"id":"s5", "userName": "User s5", "phoneNumber": "9090909090", "address": "Address s5", "skills": "css"},
    {"id":"s6", "userName": "User s6", "phoneNumber": "9090909090", "address": "Address s6", "skills": "js"},
    {"id":"s7", "userName": "User s7", "phoneNumber": "9090909090", "address": "Address s7", "skills": "html"},
    {"id":"s8", "userName": "User s8", "phoneNumber": "9090909090", "address": "Address s8", "skills": "js,html,css"},
    {"id":"s9", "userName": "User s9", "phoneNumber": "9090909090", "address": "Address s9", "skills": "js,css"},
    {"id":"s0", "userName": "User s0", "phoneNumber": "9090909090", "address": "Address s0", "skills": "js,html"},

    {"id":"t1", "userName": "User t1", "phoneNumber": "9090909090", "address": "Address t1", "skills": "js,html,css"},
    {"id":"t2", "userName": "User t2", "phoneNumber": "9090909090", "address": "Address t2", "skills": "js,css"},
    {"id":"t3", "userName": "User t3", "phoneNumber": "9090909090", "address": "Address t3", "skills": "js,html"},
    {"id":"t4", "userName": "User t4", "phoneNumber": "9090909090", "address": "Address t4", "skills": "html,css"},
    {"id":"t5", "userName": "User t5", "phoneNumber": "9090909090", "address": "Address t5", "skills": "css"},
    {"id":"t6", "userName": "User t6", "phoneNumber": "9090909090", "address": "Address t6", "skills": "js"},
    {"id":"t7", "userName": "User t7", "phoneNumber": "9090909090", "address": "Address t7", "skills": "html"},
    {"id":"t8", "userName": "User t8", "phoneNumber": "9090909090", "address": "Address t8", "skills": "js,html,css"},
    {"id":"t9", "userName": "User t9", "phoneNumber": "9090909090", "address": "Address t9", "skills": "js,css"},
    {"id":"t0", "userName": "User t0", "phoneNumber": "9090909090", "address": "Address t0", "skills": "js,html"},

    {"id":"u1", "userName": "User u1", "phoneNumber": "9090909090", "address": "Address u1", "skills": "js,html,css"},
    {"id":"u2", "userName": "User u2", "phoneNumber": "9090909090", "address": "Address u2", "skills": "js,css"},
    {"id":"u3", "userName": "User u3", "phoneNumber": "9090909090", "address": "Address u3", "skills": "js,html"},
    {"id":"u4", "userName": "User u4", "phoneNumber": "9090909090", "address": "Address u4", "skills": "html,css"},
    {"id":"u5", "userName": "User u5", "phoneNumber": "9090909090", "address": "Address u5", "skills": "css"},
    {"id":"u6", "userName": "User u6", "phoneNumber": "9090909090", "address": "Address u6", "skills": "js"},
    {"id":"u7", "userName": "User u7", "phoneNumber": "9090909090", "address": "Address u7", "skills": "html"},
    {"id":"u8", "userName": "User u8", "phoneNumber": "9090909090", "address": "Address u8", "skills": "js,html,css"},
    {"id":"u9", "userName": "User u9", "phoneNumber": "9090909090", "address": "Address u9", "skills": "js,css"},
    {"id":"u0", "userName": "User u0", "phoneNumber": "9090909090", "address": "Address u0", "skills": "js,html"},

    {"id":"v1", "userName": "User v1", "phoneNumber": "9090909090", "address": "Address v1", "skills": "js,html,css"},
    {"id":"v2", "userName": "User v2", "phoneNumber": "9090909090", "address": "Address v2", "skills": "js,css"},
    {"id":"v3", "userName": "User v3", "phoneNumber": "9090909090", "address": "Address v3", "skills": "js,html"},
    {"id":"v4", "userName": "User v4", "phoneNumber": "9090909090", "address": "Address v4", "skills": "html,css"},
    {"id":"v5", "userName": "User v5", "phoneNumber": "9090909090", "address": "Address v5", "skills": "css"},
    {"id":"v6", "userName": "User v6", "phoneNumber": "9090909090", "address": "Address v6", "skills": "js"},
    {"id":"v7", "userName": "User v7", "phoneNumber": "9090909090", "address": "Address v7", "skills": "html"},
    {"id":"v8", "userName": "User v8", "phoneNumber": "9090909090", "address": "Address v8", "skills": "js,html,css"},
    {"id":"v9", "userName": "User v9", "phoneNumber": "9090909090", "address": "Address v9", "skills": "js,css"},
    {"id":"v0", "userName": "User v0", "phoneNumber": "9090909090", "address": "Address v0", "skills": "js,html"},

    {"id":"w1", "userName": "User w1", "phoneNumber": "9090909090", "address": "Address w1", "skills": "js,html,css"},
    {"id":"w2", "userName": "User w2", "phoneNumber": "9090909090", "address": "Address w2", "skills": "js,css"},
    {"id":"w3", "userName": "User w3", "phoneNumber": "9090909090", "address": "Address w3", "skills": "js,html"},
    {"id":"w4", "userName": "User w4", "phoneNumber": "9090909090", "address": "Address w4", "skills": "html,css"},
    {"id":"w5", "userName": "User w5", "phoneNumber": "9090909090", "address": "Address w5", "skills": "css"},
    {"id":"w6", "userName": "User w6", "phoneNumber": "9090909090", "address": "Address w6", "skills": "js"},
    {"id":"w7", "userName": "User w7", "phoneNumber": "9090909090", "address": "Address w7", "skills": "html"},
    {"id":"w8", "userName": "User w8", "phoneNumber": "9090909090", "address": "Address w8", "skills": "js,html,css"},
    {"id":"w9", "userName": "User w9", "phoneNumber": "9090909090", "address": "Address w9", "skills": "js,css"},
    {"id":"w0", "userName": "User w0", "phoneNumber": "9090909090", "address": "Address w0", "skills": "js,html"},

    {"id":"x1", "userName": "User x1", "phoneNumber": "9090909090", "address": "Address x1", "skills": "js,html,css"},
    {"id":"x2", "userName": "User x2", "phoneNumber": "9090909090", "address": "Address x2", "skills": "js,css"},
    {"id":"x3", "userName": "User x3", "phoneNumber": "9090909090", "address": "Address x3", "skills": "js,html"},
    {"id":"x4", "userName": "User x4", "phoneNumber": "9090909090", "address": "Address x4", "skills": "html,css"},
    {"id":"x5", "userName": "User x5", "phoneNumber": "9090909090", "address": "Address x5", "skills": "css"},
    {"id":"x6", "userName": "User x6", "phoneNumber": "9090909090", "address": "Address x6", "skills": "js"},
    {"id":"x7", "userName": "User x7", "phoneNumber": "9090909090", "address": "Address x7", "skills": "html"},
    {"id":"x8", "userName": "User x8", "phoneNumber": "9090909090", "address": "Address x8", "skills": "js,html,css"},
    {"id":"x9", "userName": "User x9", "phoneNumber": "9090909090", "address": "Address x9", "skills": "js,css"},
    {"id":"x0", "userName": "User x0", "phoneNumber": "9090909090", "address": "Address x0", "skills": "js,html"},

    {"id":"y1", "userName": "User y1", "phoneNumber": "9090909090", "address": "Address y1", "skills": "js,html,css"},
    {"id":"y2", "userName": "User y2", "phoneNumber": "9090909090", "address": "Address y2", "skills": "js,css"},
    {"id":"y3", "userName": "User y3", "phoneNumber": "9090909090", "address": "Address y3", "skills": "js,html"},
    {"id":"y4", "userName": "User y4", "phoneNumber": "9090909090", "address": "Address y4", "skills": "html,css"},
    {"id":"y5", "userName": "User y5", "phoneNumber": "9090909090", "address": "Address y5", "skills": "css"},
    {"id":"y6", "userName": "User y6", "phoneNumber": "9090909090", "address": "Address y6", "skills": "js"},
    {"id":"y7", "userName": "User y7", "phoneNumber": "9090909090", "address": "Address y7", "skills": "html"},
    {"id":"y8", "userName": "User y8", "phoneNumber": "9090909090", "address": "Address y8", "skills": "js,html,css"},
    {"id":"y9", "userName": "User y9", "phoneNumber": "9090909090", "address": "Address y9", "skills": "js,css"},
    {"id":"y0", "userName": "User y0", "phoneNumber": "9090909090", "address": "Address y0", "skills": "js,html"},

    {"id":"z1", "userName": "User z1", "phoneNumber": "9090909090", "address": "Address z1", "skills": "js,html,css"},
    {"id":"z2", "userName": "User z2", "phoneNumber": "9090909090", "address": "Address z2", "skills": "js,css"},
    {"id":"z3", "userName": "User z3", "phoneNumber": "9090909090", "address": "Address z3", "skills": "js,html"},
    {"id":"z4", "userName": "User z4", "phoneNumber": "9090909090", "address": "Address z4", "skills": "html,css"},
    {"id":"z5", "userName": "User z5", "phoneNumber": "9090909090", "address": "Address z5", "skills": "css"},
    {"id":"z6", "userName": "User z6", "phoneNumber": "9090909090", "address": "Address z6", "skills": "js"},
    {"id":"z7", "userName": "User z7", "phoneNumber": "9090909090", "address": "Address z7", "skills": "html"},
    {"id":"z8", "userName": "User z8", "phoneNumber": "9090909090", "address": "Address z8", "skills": "js,html,css"},
    {"id":"z9", "userName": "User z9", "phoneNumber": "9090909090", "address": "Address z9", "skills": "js,css"},
    {"id":"z0", "userName": "User z0", "phoneNumber": "9090909090", "address": "Address z0", "skills": "js,html"},
];


export default candidateList